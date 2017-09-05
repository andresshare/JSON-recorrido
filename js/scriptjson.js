var json = {
               
                "empleados": [
                            {"nombre:": "Developer","salario": 5000000},
                            {"nombre": "Coder","salario": 5000000},
                ],
                "autos": [
                        {"marca": "pegueot","modelo": 306},
                        {"marca": "mazda","modelo": 2016},
                         {"marca":
                         [
                             {"submarca":"sub0"},
                             {"submarca":"sub1"},
                             {"submarca":"sub2"}
                         ]
                        }
                ], 
                



            };//fin



        $(document).on('ready', function () {
            $("#campoderespuesta").text(json.empleados[0].nombre); //consulta
             $("#campoderespuesta").text(json.autos[0].marca);
             $("#campoderespuesta").text(json.autos[2].marca[1].submarca);

        });
