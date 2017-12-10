angular.module('wowjsons')
	.factory('wowCustomFunctionsFactory', ['$filter', function($filter) {
		var wowCustomFunctionsFactory = {};
	//////////////////////////////////////////////////////////////////////////////////////////////////////		
        wowCustomFunctionsFactory.data = {};

        wowCustomFunctionsFactory.data[1026] = {
            "location": {
              "Bengaluru": {
                "Address": "Sears IT & Management Services India Pvt. Ltd. 7th floor, 2B Building, Tower 2, Embassy Tech Village, Near New Horizon College, Devarabisanahalli,Bangalore - 560103",
                "Name": "Mrs. Mahima Tiwari",
                "Contact": "+91 7338699304",
                "Email": "Mahima.Tiwari@searshc.com"
              },
              "Hyderabad": {
                "Address": "Sears IT & Management services india pvt ltd. Office level 1 of building h06a (h05), Avance business hub, Behind dell campus,.Survey no 38 (p),gachibowli village, Serilingampally mandal, Ranga reddy district, Hyderabad - 500 081 Telangana",
                "Name": "Mr.  Percy Sutaria",
                "Contact": "+91 9833477768",
                "Email": "Percy.Sutaria@searshc.com"
              },
              "Pune": {
                "Address": "Sears IT and Management Services India Pvt. Ltd, EON Free Zone, Cluster D, Wing 2, 4th Floor,MIDC Kharadi Knowledge Park,Pune -411014 ",
                "Name": "Mr. Mohbansi Devendra & Mr. Paresh Naik",
                "Contact": "+91 8411009671 & +91 841109545",
                "Email": "Devendra.Mohbansi@searshc.com & Paresh.Naik@searshc.com"
              }
            },
            "industry": {
              "It": {
                "band_level": {
                  "band_O_level_1": {
                    "gmc_premium": 14000,
                    "gpa_premium": 1250,
                    "pvb": 45000
                  },
                  "band_O_level_2": {
                    "gmc_premium": 14000,
                    "gpa_premium": 1250,
                    "pvb": 55000
                  },
                  "band_O_level_3": {
                    "gmc_premium": 14000,
                    "gpa_premium": 1250,
                    "pvb": 65000
                  },
                  "band_P_level_1": {
                    "gmc_premium": 20000,
                    "gpa_premium": 1750,
                    "pvb": 125000
                  },
                  "band_P_level_2": {
                    "gmc_premium": 20000,
                    "gpa_premium": 1750,
                    "pvb": 175000
                  },
                  "band_P_level_3": {
                    "gmc_premium": 20000,
                    "gpa_premium": 1750,
                    "pvb": 225000
                  },
                  "band_Q_level_1": {
                    "gmc_premium": 30000,
                    "gpa_premium": 3000,
                    "pvb": 350000
                  },
                  "band_Q_level_2": {
                    "gmc_premium": 30000,
                    "gpa_premium": 3000,
                    "pvb": 400000
                  },
                  "band_Q_level_3": {
                    "gmc_premium": 30000,
                    "gpa_premium": 3000,
                    "pvb": 450000
                  },
                  "band_R_level_1": {
                    "gmc_premium": 46000,
                    "gpa_premium": 4000,
                    "pvb": 650000
                  },
                  "band_R_level_2": {
                    "gmc_premium": 46000,
                    "gpa_premium": 4000,
                    "pvb": 750000
                  },
                  "band_R_level_3": {
                    "gmc_premium": 46000,
                    "gpa_premium": 4000,
                    "pvb": 850000
                  },
                  "band_S_level_1": {
                    "gmc_premium": 60000,
                    "gpa_premium": 5000,
                    "pvb": 1200000
                  },
                  "band_S_level_2": {
                    "gmc_premium": 60000,
                    "gpa_premium": 5000,
                    "pvb": 1500000
                  },
                  "band_S_level_3": {
                    "gmc_premium": 60000,
                    "gpa_premium": 5000,
                    "pvb": 1800000
                  }
                },
                "designations": [
                  "D1",
                  "D2",
                  "D3",
                  "D4",
                  "D5"
                ]
              }
            },
            "transport_allowance":19000,
            "medical":1600
          };

		wowCustomFunctionsFactory.instantiateNew = function(){

        }
        wowCustomFunctionsFactory.instantiateNew();

        wowCustomFunctionsFactory.getObject = function(){
            return wowCustomFunctionsFactory.data;
        }

		wowCustomFunctionsFactory.getObjectIdentifier = function(){
			return 0;
        }   
        
        wowCustomFunctionsFactory.getCustomFieldValue = function(functionName, inputVars){
            //*************** offer *******************

                function fn_1026_retention_bonus (){
                    return parseFloat(wowCustomFunctionsFactory.data[1026].industry['It'].band_level["Band O Level 1"]["pvb"]);
                }

                function fn_1026_pvb (){
                    return wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].band_level[inputVars.customFieldsMap["band_level"]]["pvb"]
                }

                function fn_1026_group_medical_insurance (){
                    return wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].band_level[inputVars.customFieldsMap["band_level"]]["gmc_premium"]
                }

                function fn_1026_group_personal_accident_insurance (){
                    return wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].band_level[inputVars.customFieldsMap["band_level"]]["gmc_premium"]
                }

                function fn_1026_transport_allowance (){
                    if(inputVars.customFieldsMap["annual_compensation"] > 0){
                        return wowCustomFunctionsFactory.data[1026].transport_allowance;
                    }else{
                        return 0;
                    }
                }

                function fn_1026_medical (){
                    if(inputVars.customFieldsMap["annual_compensation"] > 0){
                        return wowCustomFunctionsFactory.data[1026].medical;
                    }else{
                        return 0;
                    }
                }

                function fn_1026_basic (){
                    if(inputVars.customFieldsMap["annual_compensation"] < 1000000){
                        return inputVars.customFieldsMap["fixed_component"] * 0.16;
                    }else{
                        return inputVars.customFieldsMap["fixed_component"] * 0.35;
                    }
                }

                function fn_1026_pf (){
                    if(inputVars.customFieldsMap["basic"] > 180000){
                        return 180000 * 0.12;
                    }else{
                        return inputVars.customFieldsMap["basic"] * 0.12;
                    }
                }

                function fn_1026_pda (){
                    if(inputVars.customFieldsMap["annual_compensation"] > 0){
                        return inputVars.customFieldsMap["annual_compensation"] - 
                        (
                            inputVars.customFieldsMap["basic"] +
                            inputVars.customFieldsMap["hra"] + 
                            inputVars.customFieldsMap["transport"] + 
                            inputVars.customFieldsMap["medical"] +
                            inputVars.customFieldsMap["lta"] + 
                            inputVars.customFieldsMap["gmc"] +
                            inputVars.customFieldsMap["gpa"] + 
                            inputVars.customFieldsMap["gratuity"] +
                            inputVars.customFieldsMap["pf"]
                        )
                    }else{
                        return 0;
                    }
                }

            //*************** address *****************
                function fn_1026_c_address (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["location"]]["Address"];
                }

                function fn_1026_c_contact_person (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["location"]]["Name"];
                }

                function fn_1026_c_contact_no (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["location"]]["Contact"];
                }

                function fn_1026_c_email (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["location"]]["Email"];
                }

            //*************** lists *****************
                    
                function fn_1026_band_level_list (){
                    return Object.keys(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].band_level).toString();
                }

                function fn_1026_designation_list (){
                    return Object.keys(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].designations).toString();
                }

                function fn_1026_band_industry_list (){
                    return Object.keys(wowCustomFunctionsFactory.data[1026].industry).toString();
                }

            switch(functionName){
                case "fn_1026_designation_list":
                    return fn_1026_designation_list();
                case "fn_1026_basic_comp":
                    return fn_1026_basic_comp();
                case "fn_1026_retention_bonus":
                    return fn_1026_retention_bonus();
                case "fn_1026_pvb":
                    return fn_1026_pvb();
                case "fn_1026_group_medical_insurance":
                    return fn_1026_group_medical_insurance();
                case "fn_1026_group_personal_accident_insurance":
                    return fn_1026_group_personal_accident_insurance();

                case "fn_1026_transport_allowance":
                    return fn_1026_transport_allowance();
                case "fn_1026_medical":
                    return fn_1026_medical();
                case "fn_1026_basic":
                    return fn_1026_basic();
                case "fn_1026_pf":
                    return fn_1026_pf();
                case "fn_1026_pda":
                    return fn_1026_pda();    
                    
                case "fn_1026_c_address":
                    return fn_1026_c_address(); 
                case "fn_1026_c_contact_person":
                    return fn_1026_c_contact_person(); 
                case "fn_1026_c_contact_no":
                    return fn_1026_c_contact_no(); 
                case "fn_1026_c_email":
                    return fn_1026_c_email(); 
                    
                case "fn_1026_band_level_list":
                    return fn_1026_band_level_list();
                case "fn_1026_band_industry_list":
                    return fn_1026_band_industry_list();
            }
        }

		wowCustomFunctionsFactory.reset = function(){
			
		}
				
	//////////////////////////////////////////////////////////////////////////////////////////////////////		
	
	//Return the factory so all controllers could use it
	return wowCustomFunctionsFactory;
	
}]);