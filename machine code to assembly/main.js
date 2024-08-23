let format=3;
function getSICFunction(hexOpcode) {
    let uppercaseOpcode = hexOpcode.toUpperCase();
    if (uppercaseOpcode === "18") {
        return "ADD";
    } else if (uppercaseOpcode === "40") {
        return "AND";
    } else if (uppercaseOpcode === "28") {
        return "COMP";
    }
    else if (uppercaseOpcode === "24") {
        return "DIV";
    } else if (uppercaseOpcode === "3C") {
        return "J";
    }
    else if (uppercaseOpcode === "30") {
        return "JEQ";
    } else if (uppercaseOpcode === "34") {
        return "JGT";
    }
    else if (uppercaseOpcode === "38") {
        return "JLT";
    } else if (uppercaseOpcode === "48") {
        return "JSUB";
    }
    else if (uppercaseOpcode === "00") {
        return "LDA";
    } else if (uppercaseOpcode === "50") {
        return "LDCH";
    }
    else if (uppercaseOpcode === "08") {
        return "LDL";
    } else if (uppercaseOpcode === "04") {
        return "LDX";
    }
    else if (uppercaseOpcode === "20") {
        return "MUL";
    } else if (uppercaseOpcode === "44") {
        return "OR";
    }
    else if (uppercaseOpcode === "D8") {
        return "RD";
    } else if (uppercaseOpcode === "4C") {
        return "RSUB";
    }
    else if (uppercaseOpcode === "0C") {
        return "STA";
    } else if (uppercaseOpcode === "54") {
        return "STCH";
    }
    else if (uppercaseOpcode === "14") {
        return "STL";
    } else if (uppercaseOpcode === "E8") {
        return "STSW";
    }
    else if (uppercaseOpcode === "10") {
        return "STX";
    } else if (uppercaseOpcode === "1C") {
        return "SUB";
    }
    else if (uppercaseOpcode === "E0") {
        return "TD";
    } else if (uppercaseOpcode === "2C") {
        return "TIX";
    }
    else if (uppercaseOpcode === "DC") {
        return "WD";
    } else if (uppercaseOpcode === "C4") {
        format=1;
        return "FIX";
    }
    else if (uppercaseOpcode === "C0") {
        format=1;
        return "FLOAT";
    } else if (uppercaseOpcode === "F4") {
        format=1;
        return "HIO";
    }
    else if (uppercaseOpcode === "C8") {
        format=1;
        return "NORM";
    } else if (uppercaseOpcode === "F0") {
        format=1;
        return "SIO";
    }
    else if (uppercaseOpcode === "F8") {
        format=1;
        return "TIO";
    }  
    else {
        return "false";
    }
}
///////////////////////////////////////////////////////////////////////
function get_ascii(ascii){
    if(ascii=='41'){
        return 'A'
    }else if(ascii=='42'){
        return 'B'
     }
     else if(ascii=='43'){
        return 'C'
     }
     
     else if(ascii=='44'){
        return 'D'
     }
     else if(ascii=='45'){
        return 'E'
     }
     else if(ascii=="46"){
        return 'F'
     }
     else if(ascii=='47'){
        return 'G'
     }
     else if(ascii=='48'){
        return 'H'
     }
     else if(ascii=='49'){
        return 'I'
     }
     else if(ascii=='4A'){
        return 'J'
     }
     else if(ascii=='4B'){
        return 'K'
     }
     else if(ascii=='4C'){
        return 'L'
     }
     else if(ascii=='4D'){
        return 'M'
     }
     else if(ascii=='4E'){
        return 'N'
     }
     else if(ascii=='4F'){
        return 'O'
     }
     else if(ascii=='50'){
        return 'P'
     }
     else if(ascii=='51'){
        return 'Q'
     }
     else if(ascii=='52'){
        return 'R'
     }
     else if(ascii=='53'){
        return 'S'
     }
     else if(ascii=='54'){
        return 'T'
     }
     else if(ascii=='55'){
        return 'U'
     }
     else if(ascii=='56'){
        return 'V'
     }
     else if(ascii=='57'){
        return 'W'
     }
     else if(ascii=='58'){
        return 'x'
     }
     else if(ascii=='59'){
        return 'Y'
     }else if(ascii=='5A'){
        return 'Z'
     }else if(ascii=="20"){
        return " "
     }
     else
     return "false";

}







///////////////////////////////////////////////////////////////////////
function hexToBinary(hex) {
    if (!/^[0-9A-Fa-f]+$/.test(hex)) {
        console.log("Invalid hexadecimal input");
        return null;
    }
    let binary = parseInt(hex, 16).toString(2);   
    while (binary.length % 8 !== 0) {
        binary = '0' + binary;
    }
    return binary
}
function binaryTo4DigitHex(binary) {
    const decimalValue = parseInt(binary, 2);
    let hexValue = decimalValue.toString(16).toUpperCase();

    while (hexValue.length < 4) {
        hexValue = '0' + hexValue;
    }

    return hexValue;
}
function hexToDecimal(hexString) {  
    if (!/^[0-9A-Fa-f]{4}$/.test(hexString)) {
        throw new Error("Invalid hexadecimal string. Please provide a 44-digit hexadecimal number.");
    }
    let decimalValue = BigInt(`0x${hexString}`);
    return decimalValue.toString();
}
//////////////////////////////////////////////////////////////////////////
function addHexNumbers(hexNum1, hexNum2) {
    var decimalNum1 = parseInt(hexNum1, 16);
    var decimalNum2 = parseInt(hexNum2, 16);
    var resultDecimal = decimalNum1 + decimalNum2;
    var resultHex = resultDecimal.toString(16).toUpperCase();
    while (resultHex.length < 4) {
        resultHex = "0" + resultHex;
    }
    return resultHex;
}
////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
function subtract4DigitHex(hex1, hex2) {
    if (hex1.length !== 4 || hex2.length !== 4) {
        throw new Error("Input should be 4-digit hexadecimal numbers");
    }



    const num1 = parseInt(hex1, 16);
    const num2 = parseInt(hex2, 16);

    const result = num1 - num2;

    const hexResult = ((result + 0x10000) % 0x10000).toString(16).toUpperCase();

    return hexResult;
}
/////////////////////////////////////////////////////////////////////////////////














///////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');

function appendStringToFile(filename, content) {
    fs.appendFile(filename, content + '\n', (err) => {
        if (err) {
            console.error(`Error appending to ${filename}:`, err.message);
        } else {
            console.log(`Content has been appended to ${filename} asynchronously.`);
        }
       
    });
}
let location_arr=[];
let characters="";
let symbolnumber=1;
let symbol_table_hash={};
function Trecord (record){
    console.log("inside the terocrod function");  //from this line to line 321 handling refrenced and reepaetd adressees
        let location_counter= record.slice(0,6)
        if(location_counter[0] && location_counter[1]){
            location_counter=location_counter.slice(2);
        }else {
            location_counter=location_counter.slice(1);
        }
        let instructions_record=record.slice(8);
        if(location_counter in symbol_table_hash){         
                let this_record=record.slice(8);
                if(get_ascii(this_record.slice(0,2))!= "false"){           
                    for(let i=0;i<this_record.length-1;i=i+2){
                        let value=this_record[i]+this_record[i+1];
                        let char=get_ascii(value);
                        characters=characters+char;             
                    }  
                    location_counter=location_counter+"  " +symbol_table_hash[location_counter];
                     appendStringToFile('assembly.text',location_counter+" BYTE"+" C`"+characters+"`"+instructions_record)
                    }
                    else {
                        let new_word=record.slice(8)
                        console.log("this is the new word",new_word);
                        let word_value;
                        if(get_ascii(this_record.slice(0,2))== "false"){
                            console.log("inside the word if")
                            for(let i=0;i<new_word.length-1;i=i+6){
                                let word=new_word.slice(i+2,i+6);
                                console.log("this is the word after slice",word);
                                 word_value=hexToDecimal(word);
                                    console.log("this is the wordvalue",word_value);
                                 location_counter=location_counter+"  " +symbol_table_hash[location_counter];
                                 console.log("what happened");
                                appendStringToFile('assembly.text',location_counter+" word"+" "+word_value+" 00"+decimalTo4DigitHex(word_value+""));
                                console.log("what happend 2")
                                location_counter=addHexNumbers(location_counter.slice(0,5),"0003"); 
                            }
                                                
                        }

                    }  
                    console.log("this is the location counter"+location_counter)
                    console.log(characters)              
            
            location_counter=location_counter.slice(0,5);
            return 0;
        }else{
        let i=0;
        while(i<instructions_record.length-1){
            console.log("inside the while loop");
            let opcode =instructions_record.slice(i,i+2); 
            let instruction= getSICFunction(opcode);          
             
              if(instruction=="false"){    //imidate
                let opcodebinary=hexToBinary(opcode);
                if(opcodebinary[opcodebinary.length-1]=="1"){
                        opcodebinary=opcodebinary.slice(0,7);
                        opcodebinary=opcodebinary+"0";
                        opcode=binaryTo4DigitHex(opcodebinary).slice(2);     
                        instruction=getSICFunction(opcode);
                        let immediate =instructions_record.slice(i+2,i+6)
                        let immediatex=hexToDecimal(immediate);
                        console.log(location_counter,instruction,immediatex);
                        appendStringToFile('assembly.text',location_counter+" "+instruction+" "+immediatex+" "+instructions_record.slice(i,i+6))
                        location_arr.push(parseInt(hexToDecimal(location_counter)));
                        location_counter=addHexNumbers(location_counter,"0003");
                }
                i=i+6;
            }
            else if(format==3){  // format 3 handling indexed 
                if(instructions_record[i+2]=="9" ||instructions_record[i+2]=="A" ||instructions_record[i+2]=="B" ||instructions_record[i+2]=="C" ||instructions_record[i+2]=="D" ||instructions_record[i+2]=="E" ||instructions_record[i+2]=="F"||instructions_record[i+2]=="8"  ){
                    let refrence=instructions_record.slice(i+2,i+6);
                    let new_refrence= hexToBinary(refrence);
                    let new_refrence2=new_refrence.slice(4);
                    let new_refrence3="0001"+new_refrence2;
                    let final_ref =binaryTo4DigitHex(new_refrence3);
                    symbol_table_hash[final_ref]="alpha"+symbolnumber;
                    symbolnumber++;
                    console.log(location_counter,instruction,symbol_table_hash[final_ref]+",x");
                    location_arr.push(parseInt(hexToDecimal(location_counter)));
                    appendStringToFile('assembly.text',location_counter+" "+instruction+" "+symbol_table_hash[final_ref]+",x "+opcode+refrence);
                    location_counter=addHexNumbers(location_counter,"0003")            
                    i=i+6;
                }          
                else{   // format 3 hadnling not indexed
                         let refrence=instructions_record.slice(i+2,i+6);                   
                         symbol_table_hash[refrence]="alpha"+symbolnumber;
                         symbolnumber++;
                         console.log(location_counter,instruction,symbol_table_hash[refrence]);
                         location_arr.push(parseInt(hexToDecimal(location_counter)));
                         appendStringToFile('assembly.text',location_counter+" "+instruction+" "+symbol_table_hash[refrence]+" "+opcode+refrence)
                         location_counter=addHexNumbers(location_counter,"0003")
                         i=i+6;
                    }
                }
            
            else if (format==1){ //handling format 1
                console.log(location_counter,instruction)
                appendStringToFile('assembly.text',location_counter+" "+instruction)
                location_arr.push(parseInt(hexToDecimal(location_counter)));
                location_counter=addHexNumbers(location_counter,"0002",opcode)               
                i=i+2;
                format=3;
            }
           
            
        }

}
}

let p_size;
function Hrecord(hrecord){
    console.log(`\nhrecord length : \t ${hrecord.length}\n \n${hrecord}`);
    let p_name = hrecord.slice(0, 7);
    let start_address = hrecord.slice(9, 13);
     p_size = hrecord.slice(12);
    appendStringToFile("assembly.text", start_address+" "+p_name+" start "+start_address)
    console.log(`hrecord is: ${p_name} ${start_address} ${p_size}`)
}



function Erecord(erecord){
    let e_address = erecord.slice(2);
     let end_value=addHexNumbers(e_address,p_size);   
    appendStringToFile("assembly.text" ,end_value+" "+"END"+" "+e_address);
    console.log(`\nerecord ${erecord}\n`) 
}

const readlineSync = require('readline-sync');

function readFromFileLineByLineSync(filename, lineCallback) {
    try {
        const fileContent = fs.readFileSync(filename, 'utf-8');
        const lines = fileContent.split(/\r?\n/);

        lines.forEach((line) => {
            // Process each line
            lineCallback(line);
        });

        console.log('File reading is complete.');
    } catch (error) {
        console.error(`Error reading from ${filename}:`, error.message);
    }
}
const filename = 'trecord.text';
readFromFileLineByLineSync(filename, (line) => {
    if (line[0] == "H"){       //for H records
        Hrecord(line.slice(1));
    }
    if(line[0]=="T"){         // for T records 
        Trecord(line.slice(1));
    }
    if (line[0] == "E"){      //for E records
        Erecord(line.slice(1));
    }
});



 //Trecord("0010000f04102550900f54901AF02c1028381003010004041025")  //F0 format 1 instruction 
console.log("haahahahaha");
const allEntries = Object.entries(symbol_table_hash);
allEntries.forEach(entry => {
  const [key, value] = entry;
  console.log(`Key: ${key}, Value: ${value}`);
  appendStringToFile('symboltable.text',key+" "+ value);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////// pass2 to handle rsb,rsw

function decimalTo4DigitHex(decimalString) {
   
    const decimalNumber = parseInt(decimalString, 10);
  
   
    if (isNaN(decimalNumber)) {
        throw new Error("Invalid input: Not a valid decimal string");
    }
  
    
    let hexValue = decimalNumber.toString(16);
  
   
    while (hexValue.length < 4) {
        hexValue = '0' + hexValue;
    }
  
    return hexValue.toString().toUpperCase();
  }
  function hexDiffToDecimal(hex1, hex2) {
   
    const num1 = parseInt(hex1, 16);
    const num2 = parseInt(hex2, 16);

   
    const difference = num1 - num2;
    console.log("first hexa",hex1,hex2);
    console.log("this is the diffrence",difference);
    return difference;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (const key in symbol_table_hash) {    
    let value = hexToDecimal(key);
    if(location_arr.indexOf(parseInt(value))==-1){
        location_arr.push(parseInt(value));    
        }
}
location_arr.sort();
console.log(location_arr);
////////////////////////////////////////////////////////////////////////////////////////


let arr=[];
function appendToLine(filePath, callback) {    // handling RSB AND RSW by putting the lines in an array then puting the location counters in ana arry
  // Read the file                             // then comparing the sorted array with each location if it is missing insert the new one and find if it                                              //
  fs.readFile(filePath, 'utf8', (err, data) => { // is divisible by then its RSW else rsb
    if (err) {
      return callback(err);
    }

    const lines = data.split('\n');
    let start= lines.shift();
    lines.pop()
    let end=lines.pop(); 
         console.log("lines are",lines)
         let len=location_arr.length - lines.length;
         let j=0;
         for (let i = 0; i < location_arr.length+len-1 && j<location_arr.length+len-1; i++,j++) {
            console.log(j);
            console.log("this is the locations array",decimalTo4DigitHex(""+location_arr[i]));
            let value =decimalTo4DigitHex(location_arr[j].toString())
            
            if(lines[i]==null){
                arr.push(decimalTo4DigitHex(location_arr[j].toString()));
                break;
            }
            if (lines[i].slice(0,4) == value) {
                arr.push(lines[i]);
                console.log("this is the line",lines[i]);
            } else {
                 let value =hexDiffToDecimal(lines[i].slice(0,4),decimalTo4DigitHex(location_arr[i].toString()));
                 if(parseInt(value)%3!=0){
                    console.log("symbol table has",location_arr[j]);
                    arr.push(decimalTo4DigitHex(location_arr[j].toString())+" "+symbol_table_hash[decimalTo4DigitHex(location_arr[j].toString())] +" RESB "+ value);
                    arr.push(lines[i]);
                }else{
                    arr.push(decimalTo4DigitHex(location_arr[j].toString())+" resw "+ parseInt(value)/3);
                    arr.push(lines[i]);
                }
                j++;
                console.log("this is the line",lines[i]);
                console.log("this is the location array in else",decimalTo4DigitHex(location_arr[j].toString()));           
            }
            
        }
    console.log("this is thee array values",arr);
    arr.unshift(start);
    arr.push(end);
    const modifiedContent = arr.join('\n');

    // Write the modified content back to the file
    fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        return callback(err);
      }

      callback(null, `Content appended successfully to line`);
    });
  });
}

appendToLine("assembly.text", (err, result) => {
    if (err) {
      console.error('Error:', err.message);
    } else {
      console.log(result);
    }
  });






