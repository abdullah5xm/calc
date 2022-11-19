        const screen = document.querySelector('.screen input');
        const button = document.querySelectorAll('.button input');
        button.forEach(btn=>{
            btn.addEventListener('click', e =>{
                let press = e.target.value;
                if (screen.value.includes(':')) {
                    if (press == '=') {}
                        else{
                         screen.value = '';
                         if (press == 'AC' || press == 'DEL') {
                            screen.value = '';
                        }else{screen.value += press;}
                    }
                }
                else{
                    if (press == 'AC') {
                        screen.value = '';
                    }else if(press == 'DEL'){
                        screen.value = screen.value.slice(0,screen.value.length-1);  
                    }
                    // making result
                    else if(press == '='){
                        let addition = 0;
                        let multiply = 1;
                        // addition
                        if (screen.value.includes('+')) {
                            let arr = screen.value.split('+');
                            arr.forEach(e=>{
                                addition += Number(e);
                            })
                            screen.value = "Ans : " + addition;
                        }
                        // multiplication
                        else if(screen.value.includes('*')){
                         let arr = screen.value.split('*');
                         arr.forEach(e=>{
                            multiply *= Number(e);
                        })
                         screen.value = "Ans : " + multiply;
                     }
                     // division
                     else if(screen.value.includes('/')){
                         let arr = screen.value.split('/');
                         multiply = Number(arr[0])/Number(arr[1]);
                         screen.value = "Ans : " + multiply;
                     }
                     // subtraction
                     else if(screen.value.includes('-')){
                         let arr = screen.value.split('-');
                         if (arr.length > 2 ) {
                            multiply = -(Number(arr[1]) + Number(arr[2]));
                        }else{multiply = Number(arr[0]) - Number(arr[1]);}

                        screen.value = "Ans : " + multiply;
                    }
                }
                else{
                    if (press == '+') {
                        if (screen.value.includes('+')) {}
                            else{
                                if (Number(screen.value) == 0) {}
                                    else{screen.value += press;}
                            }
                        }else if(press == '-') {
                            if (screen.value.includes('-')) {
                                if (-Number(screen.value)) {
                                    screen.value += press;
                                }
                            }
                            else{screen.value += press;}
                        }else if(press == '*') {
                            if (screen.value.includes('*')) {}
                                else{screen.value += press;}
                        }else if(press == '/') {
                            if (screen.value.includes('/')) {}
                                else{screen.value += press;}
                        }
                        else{screen.value += press;}
                    }
                }

            });
        })