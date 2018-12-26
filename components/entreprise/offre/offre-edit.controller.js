(function () {
    'use strict';

    var app = angular.module('mainApp');           

    app.controller("EntrepriseOffreEditCtrl", ['$scope', '$q', '$injector', '$route', '$routeParams', function($scope, $q, $injector, $route, $routeParams){

        // OFFRE RESULT       
        $scope.offre = {
                id              : null,
                titre           : '',
                dtParution      : null,
                pourvu          : false,
                salaireBrut     : null,
                description     : '',
                contrat         : null,
                dureeContrat    : null,
                commune         : ''
        }

        //Liste tous les contrats
        $scope.contrats         = {};

        $scope.isEditing        = false;
        $scope.messageError     = null;
        $scope.messageSuccess   = null;

        // Init
        $scope.ngInit = function() {
            var offreService = $injector.get('offreService');            
            var contratService = $injector.get('contratService');            

            if ($route.current.params.id) {
                //$service.findFromId = function(idOffre, callBack) {
                this.isEditing = true;

                $q.all([
                    offreService.findFromId($route.current.params.id),
                    contratService.findAll()                    
                ])
                .then(function(results) {
                    $scope.offre = results[0];
                    $scope.offre.dtParution = new Date();
                    $scope.contrats = results[1];
                    console.log($scope.offre.contrat);
                    console.log($scope.contrats);
                },
                function(error) {
                    alert('error*......');
                });       

            } else {
                this.isEditing = false;

                contratService.findAll().then(function(result) {
                    $scope.contrats = result;
                },
                function(error) {
                    alert('error*......');
                });                       
            }
            //console.log($route.current.params);
            /*if (this.route.snapshot.paramMap.get('id')) {
              this.isEditing = true;
        
              const response1 = this.oService.findFromId(Number(this.route.snapshot.paramMap.get('id')));
              const response2 = this.cService.findAll();
        
              forkJoin(response1, response2).subscribe((res) => {
                this.contrats = res[1];
                this.offre = res[0];
              },
              err => {
                this.location.back();
              });
            } else {
              this.isEditing = false;
        
              const response2 = this.cService.findAll();
        
              forkJoin([response2]).subscribe((res) => {
                this.contrats = res[0];
                this.offre = new Offre();
              },
              err => {
                this.location.back();
              });
            */
        }

        // cancel
        $scope.cancel = function() {
            window.history.back();
        }
        
        // delete
        $scope.delete = function() {        
            /*const modalRef = this.ngModal.open(ConfirmComponent);
            modalRef.componentInstance.title = 'Suppression d une offre';
            modalRef.componentInstance.content = 'Voulez vous vraiment supprimer cette offre ?';
            modalRef.result.then((result) => {
              this.oService.delete(this.offre).subscribe((res: Offre) => {
                // this.messageSuccess = 'Création effectuée.';
                this.location.back();
              },
              err => {
              });
              }, (reason) => {
            });*/

            var offreService = $injector.get('offreService');            
            $scope.messageError = null;
            $scope.messageSuccess = null;
                    
            offreService.delete($scope.offre.id)
                .then(function(result) {
                    alert('succcccc');
                    window.history.back();
                },
                function(error) {
                    alert('error*......');
                    $scope.messageError = 'Impossible de supprimer l\'offre.';
                });                      

        }
        
        // saveOrUpdate
        $scope.saveOrUpdate = function() {
            var offreService = $injector.get('offreService');            
            var loginService = $injector.get('loginService');            

            $scope.messageError = null;
            $scope.messageSuccess = null;
                    
            if ($scope.offre.id == null) {
                offreService.create($scope.offre, loginService.getAuthenticatedEntreprise().id)
                    .then(function(result) {
                        $scope.offre = result;
                        $scope.messageSuccess = 'Création effectuée.';
                    },
                    function(error) {
                        alert('error*......');
                        $scope.messageError = 'Impossible de créer l\'offre.';
                    });                      
            } else {
                offreService.update($scope.offre)
                    .then(function(result) {
                        $scope.offre = result;
                        $scope.messageSuccess = 'Mise à jour effectuée.';
                    },
                    function(error) {
                        alert('error*......');
                        $scope.messageError = 'Impossible d\'effectuer la mise à jour.';
                    });
            }                      
        }

        $scope.ngInit();

    }]);
})();
         


