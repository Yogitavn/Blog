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
              "IT": {
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
                    "Associate Engineer, Technical Associate, Sr. Technical Associate, Technical Lead, Project Lead, Technical Specialist, Project Manager, Architect, Group Manager, Sr. Architect, Delivery Manager, Principal Architect, Sr Delivery Manager, Sr. Principal Architect, Asst Director, Director.  Sr. Director, AVP, Divisional VP, Sr. Divisional VP, Analyst, Business Analyst, Sr. Business Analyst, Consultant, Sr. Consultant, Lead Consultant, Principal Consultant, Sr.Principal Consultant, Principal Advisor, Sr.Principal Advisor,  Associate Executive, Executive, Sr. Executive, Asst. Manager, Dy. Manager, Manager, Team Manager, Sr. Manager, General Manager"
                ]
              },
              "BPM": {
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
                    "Jr Advisor, Advisor, Sr Advisor, Subject Matter Expert, Team Leader, Sr Team Leader\nAssistant Manager,Deputy Manager,Operations Manager,Group Manager,Delivery Manager,Sr. Delivery Manager,Associate Director,Director,Sr. Director,Analyst, Business Analyst, Sr. Business Analyst"
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
                    if(inputVars["ctcOffered"] > 0){
                        return wowCustomFunctionsFactory.data[1026].transport_allowance;
                    }else{
                        return 0;
                    }
                }

                function fn_1026_medical (){
                    if(inputVars["ctcOffered"] > 0){
                        return wowCustomFunctionsFactory.data[1026].medical;
                    }else{
                        return 0;
                    }
                }

                function fn_1026_basic (){
                    if(inputVars["ctcOffered"] < 1000000){
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
                    if(inputVars["ctcOffered"] > 0){
                        return inputVars["ctcOffered"] - 
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

                function fn_1026_get_string_annual_compensation (){
                    return get_string_number(inputVars["ctcOffered"])
                    //  Object.keys(wowCustomFunctionsFactory.data[1026].industry).toString();
                }

            //*************** address *****************
                function fn_1026_c_address (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["VAR_REQUISITION_LOCATION"]]["Address"];
                }

                function fn_1026_c_contact_person (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["VAR_REQUISITION_LOCATION"]]["Name"];
                }

                function fn_1026_c_contact_no (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["VAR_REQUISITION_LOCATION"]]["Contact"];
                }

                function fn_1026_c_email (){
                    return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["VAR_REQUISITION_LOCATION"]]["Email"];
                }

            //*************** lists *****************
                    
                function fn_1026_band_level_list (){
                    return Object.keys(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].band_level).toString();
                }

                function fn_1026_designation_list (){
                    return wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].designations.toString();
                    // Object.keys(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["type"]].designations).toString();
                }

                function fn_1026_band_industry_list (){
                    return Object.keys(wowCustomFunctionsFactory.data[1026].industry).toString();
                }
                

            //************common**********************

                var iWords = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
                var ePlace = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
                var tensPlace = ['', ' Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];
                var inWords = [];
                
                var numReversed, inWords, actnumber, i, j;
                
                function tens_complication() {
                    'use strict';
                    if (actnumber[i] === 0) {
                        inWords[j] = '';
                    } else if (actnumber[i] === 1) {
                        inWords[j] = ePlace[actnumber[i - 1]];
                    } else {
                        inWords[j] = tensPlace[actnumber[i]];
                    }
                }
                
                function get_string_number(junkVal) {
                    'use strict';
                    junkVal = Math.floor(junkVal);
                    var obStr = junkVal.toString();
                    numReversed = obStr.split('');
                    actnumber = numReversed.reverse();
                
                    if (Number(junkVal) >= 0) {
                        //do nothing
                    } else {
                        window.alert('wrong Number cannot be converted');
                        return false;
                    }
                    if (Number(junkVal) === 0) {
                        document.getElementById('container').innerHTML = obStr + '' + 'Rupees Zero Only';
                        return false;
                    }
                    if (actnumber.length > 9) {
                        window.alert('Oops!!!! the Number is too big to covertes');
                        return false;
                    }
                
                
                
                    var iWordsLength = numReversed.length;
                    var finalWord = '';
                    j = 0;
                    for (i = 0; i < iWordsLength; i++) {
                        switch (i) {
                            case 0:
                                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                                    inWords[j] = '';
                                } else {
                                    inWords[j] = iWords[actnumber[i]];
                                }
                                inWords[j] = inWords[j] + ' Only';
                                break;
                            case 1:
                                tens_complication();
                                break;
                            case 2:
                                if (actnumber[i] === '0') {
                                    inWords[j] = '';
                                } else if (actnumber[i - 1] !== '0' && actnumber[i - 2] !== '0') {
                                    inWords[j] = iWords[actnumber[i]] + ' Hundred and';
                                } else {
                                    inWords[j] = iWords[actnumber[i]] + ' Hundred';
                                }
                                break;
                            case 3:
                                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                                    inWords[j] = '';
                                } else {
                                    inWords[j] = iWords[actnumber[i]];
                                }
                                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                                    inWords[j] = inWords[j] + ' Thousand';
                                }
                                break;
                            case 4:
                                tens_complication();
                                break;
                            case 5:
                                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                                    inWords[j] = '';
                                } else {
                                    inWords[j] = iWords[actnumber[i]];
                                }
                                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                                    inWords[j] = inWords[j] + ' Lakh';
                                }
                                break;
                            case 6:
                                tens_complication();
                                break;
                            case 7:
                                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                                    inWords[j] = '';
                                } else {
                                    inWords[j] = iWords[actnumber[i]];
                                }
                                inWords[j] = inWords[j] + ' Crore';
                                break;
                            case 8:
                                tens_complication();
                                break;
                            default:
                                break;
                        }
                        j++;
                    }
                
                    inWords.reverse();
                    for (i = 0; i < inWords.length; i++) {
                        finalWord += inWords[i];
                    }
                    return finalWord;
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
                case "fn_1026_office_address":
                    return fn_1026_office_address();
                    
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

                case "fn_1026_get_string_annual_compensation":
                    return fn_1026_get_string_annual_compensation();

            }
        }

		wowCustomFunctionsFactory.reset = function(){
			
		}
				
	//////////////////////////////////////////////////////////////////////////////////////////////////////		
	
	//Return the factory so all controllers could use it
	return wowCustomFunctionsFactory;
	
}]);