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
                    "Band 1 Level A": {
                        "gmc_premium": 14000,
                        "gpa_premium": 1250,
                        "gmc_cover": 200000,
                        "gpa_cover": 1000000,
                        "pvb": "50000",
                        "designations": "Associate Engineer,Analyst,Associate Executive"
                    },
                    "Band 1 Level B": {
                        "gmc_premium": 14000,
                        "gpa_premium": 1250,
                        "gmc_cover": 200000,
                        "gpa_cover": 1000000,
                        "pvb": "55000",
                        "designations": "Technical Associate,Business Analyst,Executive"
                    },
                    "Band 1 Level C": {
                        "gmc_premium": 14000,
                        "gpa_premium": 1250,
                        "gmc_cover": 200000,
                        "gpa_cover": 1000000,
                        "pvb": "65000",
                        "designations": "Sr. Technical Associate,Sr. Business Analyst,Sr. Executive"
                    },
                    "Band 2 Level A": {
                        "gmc_premium": 20000,
                        "gpa_premium": 1750,
                        "gmc_cover": 300000,
                        "gpa_cover": 1500000,
                        "pvb": "125000",
                        "designations": "Technical Lead,Consultant,Asst. Manager"
                    },
                    "Band 2 Level B": {
                        "gmc_premium": 20000,
                        "gpa_premium": 1750,
                        "gmc_cover": 300000,
                        "gpa_cover": 1500000,
                        "pvb": "175000",
                        "designations": "Project Lead,Technical Specialist,Sr. Consultant(Sr.Advisor)*,Dy. Manager"
                    },
                    "Band 2 Level C": {
                        "gmc_premium": 20000,
                        "gpa_premium": 1750,
                        "gmc_cover": 300000,
                        "gpa_cover": 1500000,
                        "pvb": "225000",
                        "designations": "Project Manager,Architect,Lead Consultant(Lead Advisor)*,Manager"
                    },
                    "Band 3 Level A": {
                        "gmc_premium": 30000,
                        "gpa_premium": 3000,
                        "gmc_cover": 500000,
                        "gpa_cover": 2000000,
                        "pvb": "350000",
                        "designations": "Group Manager,Sr. Architect,Principal Consultant,(Principal Advisor)*,Team Manager"
                    },
                    "Band 3 Level B": {
                        "gmc_premium": 30000,
                        "gpa_premium": 3000,
                        "gmc_cover": 500000,
                        "gpa_cover": 2000000,
                        "pvb": "400000",
                        "designations": "Delivery Manager,Principal Architect,Sr.Principal Consultant (Sr.Principal Advisor)*,Sr. Manager,Sr.Principal Consultant (Sr.Principal Advisor)*"
                    },
                    "Band 3 Level C": {
                        "gmc_premium": 30000,
                        "gpa_premium": 3000,
                        "gmc_cover": 500000,
                        "gpa_cover": 2000000,
                        "pvb": "450000",
                        "designations": "Sr Delivery Manager,Sr. Principal Architect,General Manager,Sr.Principal Consultant (Sr.Principal Advisor)*"
                    },
                    "Band 4 Level A": {
                        "gmc_premium": 46000,
                        "gpa_premium": 4000,
                        "gmc_cover": 800000,
                        "gpa_cover": 2500000,
                        "pvb": "650000",
                        "designations": "Asst Director"
                    },
                    "Band 4 Level B": {
                        "gmc_premium": 46000,
                        "gpa_premium": 4000,
                        "gmc_cover": 800000,
                        "gpa_cover": 2500000,
                        "pvb": "750000",
                        "designations": "Director"
                    },
                    "Band 4 Level C": {
                        "gmc_premium": 46000,
                        "gpa_premium": 4000,
                        "gmc_cover": 800000,
                        "gpa_cover": 2500000,
                        "pvb": "850000",
                        "designations": "Sr. Director"
                    },
                    "Band 5 Level A": {
                        "gmc_premium": 60000,
                        "gpa_premium": 5000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": "1200000",
                        "designations": "AVP"
                    },
                    "Band 5 Level B": {
                        "gmc_premium": 60000,
                        "gpa_premium": 5000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": "1500000",
                        "designations": "Divisional VP"
                    },
                    "Band 5 Level C": {
                        "gmc_premium": 60000,
                        "gpa_premium": 5000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": "1800000",
                        "designations": "Sr. Divisional VP"
                    },
                    "Band 6": {
                        "gmc_premium": 70000,
                        "gpa_premium": 10000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": "0",
                        "designations": "VP,Sr. VP"
                    }
                }
            },
            "BPM": {
                "band_level": {
                    "Band O Level 1": {
                        "gmc_premium": 14000,
                        "gpa_premium": 1250,
                        "gmc_cover":200000,
                        "gpa_cover":1000000,
                        "pvb": 45000,
                        "designations": "Subject Matter Expert,Jr Analyst"
                    },
                    "Band O Level 2": {
                        "gmc_premium": 14000,
                        "gpa_premium": 1250,
                        "gmc_cover":200000,
                        "gpa_cover":1000000,
                        "pvb": 55000,
                        "designations": "Team Leader,Analyst"
                    },
                    "Band O Level 3": {
                        "gmc_premium": 14000,
                        "gpa_premium": 1250,
                        "gmc_cover":200000,
                        "gpa_cover":1000000,
                        "pvb": 65000,
                        "designations": "Sr Team Leader,Sr Analyst"
                    },
                    "Band P Level 1": {
                        "gmc_premium": 20000,
                        "gpa_premium": 1750,
                        "gmc_cover":300000,
                        "gpa_cover": 1500000,
                        "pvb": 125000,
                        "designations": "Assistant Manager"
                    },
                    "Band P Level 2": {
                        "gmc_premium": 20000,
                        "gpa_premium": 1750,
                        "gmc_cover":300000,
                        "gpa_cover": 1500000,
                        "pvb": 175000,
                        "designations": "Deputy Manager"
                    },
                    "Band P Level 3": {
                        "gmc_premium": 20000,
                        "gpa_premium": 1750,
                        "gmc_cover":300000,
                        "gpa_cover": 1500000,
                        "pvb": 225000,
                        "designations": "Operations Manager"
                    },
                    "Band Q Level 1": {
                        "gmc_premium": 30000,
                        "gpa_premium": 3000,
                        "gmc_cover": 500000,
                        "gpa_cover": 2000000,
                        "pvb": 350000,
                        "designations": "Group Manager"
                    },
                    "Band Q Level 2": {
                        "gmc_premium": 30000,
                        "gpa_premium": 3000,
                        "gmc_cover": 500000,
                        "gpa_cover": 2000000,
                        "pvb": 400000,
                        "designations": "Delivery Manager"
                    },
                    "Band Q Level 3": {
                        "gmc_premium": 30000,
                        "gpa_premium": 3000,
                        "gmc_cover": 500000,
                        "gpa_cover": 2000000,
                        "pvb": 450000,
                        "designations": "Sr. Delivery Manager"
                    },
                    "Band R Level 1": {
                        "gmc_premium": 46000,
                        "gpa_premium": 4000,
                        "gmc_cover": 800000,
                        "gpa_cover": 2500000,
                        "pvb": 650000,
                        "designations": "Associate Director"
                    },
                    "Band R Level 2": {
                        "gmc_premium": 46000,
                        "gpa_premium": 4000,
                        "gmc_cover": 800000,
                        "gpa_cover": 2500000,
                        "pvb": 750000,
                        "designations": "Director"
                    },
                    "Band R Level 3": {
                        "gmc_premium": 46000,
                        "gpa_premium": 4000,
                        "gmc_cover": 800000,
                        "gpa_cover": 2500000,
                        "pvb": 850000,
                        "designations": "Sr. Director"
                    },
                    "Band S Level 1": {
                        "gmc_premium": 60000,
                        "gpa_premium": 5000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": 1200000,
                        "designations": ""
                    },
                    "Band S Level 2": {
                        "gmc_premium": 60000,
                        "gpa_premium": 5000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": 1500000,
                        "designations": ""
                    },
                    "Band S Level 3": {
                        "gmc_premium": 60000,
                        "gpa_premium": 5000,
                        "gmc_cover": 1000000,
                        "gpa_cover": 10000000,
                        "pvb": 1800000,
                        "designations": ""
                    },
                    "Band N Level 1": {
                        "gmc_premium": 8000,
                        "gpa_premium": 250,
                        "gmc_cover": 175000,
                        "gpa_cover": 500000,
                        "pvb": 25000,
                        "designations": "Jr Advisor"
                    },
                    "Band N Level 2": {
                        "gmc_premium": 8000,
                        "gpa_premium": 250,
                        "gmc_cover": 175000,
                        "gpa_cover": 500000,
                        "pvb": 25000,
                        "designations": "Advisor"
                    },
                    "Band N Level 3": {
                        "gmc_premium": 8000,
                        "gpa_premium": 250,
                        "gmc_cover": 175000,
                        "gpa_cover": 500000,
                        "pvb": 25000,
                        "designations": "Sr Advisor,Trainee Analyst"
                    }
                }
            }
        },
        "transport_allowance":19200,
        "medical_reimbursment":15000
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
    
    wowCustomFunctionsFactory.getCustomFieldValue = function(functionName, inputVars, currentOpening, selectedAaListItem){
        //*************** offer *******************

            function fn_1026_retention_bonus (){
                return wowCustomFunctionsFactory.data[1026].industry['It'].band_level[inputVars.customFieldsMap["band_level"]]["pvb"];
            }

            function fn_1026_bonus_type (){
                if(inputVars.customFieldsMap["band_level"]!='Band N Level 1'&&
                inputVars.customFieldsMap["band_level"]!='Band N Level 2'&&
                inputVars.customFieldsMap["band_level"]!='Band N Level 3'&&
                inputVars.customFieldsMap["band_level"]!='Band 1 Level A'){
                    return "Performance Variable Bonus (PVB)**";
                }else{
                    return "Retention";
                }
            }

            function fn_1026_pvb (){
                    return (wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level[inputVars.customFieldsMap["band_level"]]["pvb"]).toString();
            }

            function fn_1026_group_medical_insurance (){
                return Math.floor(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level[inputVars.customFieldsMap["band_level"]]["gmc_premium"]);
            }

            function fn_1026_group_personal_accident_insurance (){
                return Math.floor(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level[inputVars.customFieldsMap["band_level"]]["gpa_premium"]);
            }

            function fn_1026_group_medical_cover (){
                return Math.floor(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level[inputVars.customFieldsMap["band_level"]]["gmc_cover"]);
            }

            function fn_1026_group_personal_accident_cover (){
                return Math.floor(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level[inputVars.customFieldsMap["band_level"]]["gpa_cover"]);
            }

            function fn_1026_transport_allowance (){
                if(inputVars.customFieldsMap["annual_compensation"] > 0){
                    return Math.floor(wowCustomFunctionsFactory.data[1026].transport_allowance);
                }else{
                    return 0;
                }
            }

            function fn_1026_medical_reimbursment (){
                if(inputVars.customFieldsMap["annual_compensation"] > 0 
                && inputVars.customFieldsMap["band_level"]!='Band N Level 1'
                && inputVars.customFieldsMap["band_level"]!='Band N Level 2'
                && inputVars.customFieldsMap["band_level"]!='Band N Level 3'){
                    return wowCustomFunctionsFactory.data[1026].medical_reimbursment;
                }else{
                    return 0;
                }
            }

            function fn_1026_basic (){
                if((inputVars.customFieldsMap["fixed_component"]*0.35) < 126000){
                    return 126000;
                }else{
                    return Math.floor((inputVars.customFieldsMap["fixed_component"])*0.35);
                }
            }

            function fn_1026_pf (){
                if(inputVars.customFieldsMap["basic"] > 180000){
                    return 180000 * 0.12;
                }else{
                    return Math.floor(inputVars.customFieldsMap["basic"] * 0.12);
                }
            }

            function fn_1026_pda (){
                if(inputVars.customFieldsMap["fixed_component"] > 0){
                    return Math.floor(parseFloat(inputVars.customFieldsMap["fixed_component"]) - 
                                (
                                    parseFloat(inputVars.customFieldsMap["basic"]) +
                                    parseFloat(inputVars.customFieldsMap["hra"]) + 
                                    parseFloat(inputVars.customFieldsMap["transport"]) + 
                                    parseFloat(inputVars.customFieldsMap["medical_reimbursment"]) +
                                    parseFloat(inputVars.customFieldsMap["lta"]) + 
                                    parseFloat(inputVars.customFieldsMap["gmc"]) +
                                    parseFloat(inputVars.customFieldsMap["gpa"]) + 
                                    parseFloat(inputVars.customFieldsMap["gratuity"]) +
                                    parseFloat(inputVars.customFieldsMap["pf"])
                                )
                           );
                }else{
                    return 0;
                }
            }

            function fn_1026_get_serial_no (){
                return "SHI#" + inputVars["posNo"];
            }

            function fn_1026_get_annual_compensation (){
                return inputVars["ctcOffered"];
            }

            function fn_1026_get_string_annual_compensation (){
                return get_string_number(inputVars.customFieldsMap["annual_compensation"])
            }

            function fn_1026_get_joining_bonus_clause (){
                if(inputVars.customFieldsMap["joining_bonus"]>0){
                    return "A. Joining Bonus : You shall be eligible to receive INR " + inputVars.customFieldsMap["joining_bonus"].toString() +
                    "/ - ("+ get_string_number(inputVars.customFieldsMap["joining_bonus"]) +") as a onetime joining bonus. The same would be paid to you along with your first salary payment. The full amount of joining bonus will be recovered from you in case you resign or your employment is terminated within 1 (One) year from the date of joining. In any such case, the Company shall be entitled, at its discretion, to set-off/adjust the joining bonus against the salary in lieu of notice payable (if any) at the time of resignation/ termination (as the case may be).";
                }
                else{
                    return '';
                }
            }
            

        //*************** address *****************
            function fn_1026_c_address (){
                return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["office_location"]]["Address"];
            }

            function fn_1026_c_contact_person (){
                return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["office_location"]]["Name"];
            }

            function fn_1026_c_contact_no (){
                return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["office_location"]]["Contact"];
            }

            function fn_1026_c_email (){
                return wowCustomFunctionsFactory.data[1026].location[inputVars.customFieldsMap["office_location"]]["Email"];
            }

        //*************** lists *****************
                
            function fn_1026_band_level_list (){
                return Object.keys(wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level).toString();
            }

            function fn_1026_designation_list (){
                return wowCustomFunctionsFactory.data[1026].industry[inputVars.customFieldsMap["business"]].band_level[inputVars.customFieldsMap["band_level"]].designations.toString();
            }

            function fn_1026_band_industry_list (){
                return Object.keys(wowCustomFunctionsFactory.data[1026].industry).toString();
            }

            function fn_1026_c_location_list (){
                return Object.keys(wowCustomFunctionsFactory.data[1026].location).toString();
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
            case "fn_1026_group_medical_cover":
                return fn_1026_group_medical_cover();
            case "fn_1026_group_personal_accident_cover":
                return fn_1026_group_personal_accident_cover();
            case "fn_1026_get_joining_bonus_clause":
                return fn_1026_get_joining_bonus_clause();                

            case "fn_1026_get_serial_no":
                return fn_1026_get_serial_no();
            case "fn_1026_bonus_type":
                return fn_1026_bonus_type();
                

            case "fn_1026_transport_allowance":
                return fn_1026_transport_allowance();
            case "fn_1026_medical_reimbursment":
                return fn_1026_medical_reimbursment();
            case "fn_1026_basic":
                return fn_1026_basic();
            case "fn_1026_pf":
                return fn_1026_pf();
            case "fn_1026_pda":
                return fn_1026_pda();                    
            case "fn_1026_office_address":
                return fn_1026_office_address();
               
            case "fn_1026_c_location_list":
                return fn_1026_c_location_list(); 
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

            case "fn_1026_get_annual_compensation":
                return fn_1026_get_annual_compensation();

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