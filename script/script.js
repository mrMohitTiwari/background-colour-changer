let btn = document.getElementById("btn")
// reandom hexadecimal code generator
let randomhexaCodeGenerator = () => {
                const stringOfChoices="0123456789ABCDEF"
                const hash ="#" //ye to hr kisi se pehle rehna chaiye
                let hexCode = hash;
                console.log(hexCode)
              for(let i=0;i<6;i++){
                    hexCode += (stringOfChoices[Math.floor(Math.random()*16)])
              }
              return hexCode
            }
            console.log(randomhexaCodeGenerator());
            //function to change bakcground colour
            let backgroundchanger = ()=>{
                document.body.style.backgroundColor=randomhexaCodeGenerator()

            }
           btn.addEventListener("click" , backgroundchanger)