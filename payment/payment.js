document.addEventListener("DOMContentLoaded", function(){
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name")
    const price = params.get("price")

    const title = document.getElementById("title");

    const customer = document.getElementById("customer");
    customer.style.display = "flex";

    const sending = document.getElementById("sending");
    sending.style.display = "none";
    
    const payment = document.getElementById("payment");
    payment.style.display = "none";

    document.getElementById("next").addEventListener("click", function(){
        if (customer.style.display == "flex")
        {
            if (customerCheck())
            {
                customer.style.display = "none";
                sending.style.display = "flex";
                title.innerText = "Shipping Details";

                const p2 = document.getElementById("p2");
                p2.style.backgroundColor = "var(--pointsOn-color)";
                p2.style.boxShadow = "0 0 20px var(--pointsOn-color)";
            }
        }
        else if (sending.style.display == "flex")
        {
            if (sendingCheck())
            {
                sending.style.display = "none";
                payment.style.display = "flex";
                title.innerText = "Payment Details";

                const p3 = document.getElementById("p3");
                p3.style.backgroundColor = "var(--pointsOn-color)";
                p3.style.boxShadow = "0 0 20px var(--pointsOn-color)";

                const nextBtn = document.getElementById("next");
                nextBtn.innerText = "Pay " + price + "$"; 
            }
        }
        else
        {
            if (paymentCheck())
            {
                window.location.href = "../home page/home_page.html";
                alert("The order was placed successfully")
            }
        }

        //-------------------- c u s o m e r    p a r t    c h e c k --------------------
        function phoneCheck()
        {
            const phoneNum = document.getElementById("phone-box").value.trim();

            if (/^05\d+$/.test(phoneNum) && phoneNum.length == 10)
            {
                return true;
            }
            else
            {
                
                return false;
            }
        }

        function nameCheck()
        {
            const fName = document.getElementById("firstname-box").value.trim();

            if (/^[a-zA-Z]+$/.test(fName) && fName.length > 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        function l_nameCheck()
        {
            const l_Name = document.getElementById("lastname-box").value.trim();

            if (/^[a-zA-Z]+$/.test(l_Name) && l_Name.length > 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        function emailChack()
        {
            const email = document.getElementById("email-box").value.trim();

            if (/@gmail.com$/.test(email) && email.length > 10)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        function customerCheck()
        {
            if (phoneCheck() && nameCheck() && l_nameCheck() && emailChack())
            {
                return true;
            }
            else
            {
                alert("Something is wrong, pleas try again.");
            }
        }

        //-------------------- s e n d i n g    p a r t    c h e c k --------------------
        function cityCheck()
        {
            const city = document.getElementById("city-box").value.trim();

            if (/^[A-Za-z]+$/.test(city) && city.length > 2)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        function streetCheck()
        {
            const street = document.getElementById("street-box").value.trim();

            if (/^[A-Za-z]+$/.test(street) && street.length > 2)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        function zipcodeCheck()
        {
            const zipcode = document.getElementById("zipcode-box").value.trim();

            if (/^\d+$/.test(zipcode) && zipcode.length == 5)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        function sendingCheck()
        {
            if (cityCheck() && streetCheck() && zipcodeCheck())
            {
                return true;
            }
            else
            {
                alert("Something is wrong, pleas try again.");
            }
        }

        //-------------------- p a y m e n t    p a r t    c h e c k --------------------
        function creditCheck()
        {
            let credit = document.getElementById("credit-box").value.trim();
            
            
            if (/^\d+$/.test(credit) && credit.length == 16)
            {
                //4012888888881881
                let credit2 = String(credit.substring(0, credit.length-1));
                let twoOrOne = true;
                let sum = 0;
                let checkDig = Number(credit.substring(credit.length-1, credit.length));
                
                for (let i = credit2.length-1; i >= 0; i-=1)
                {
                    if (twoOrOne == false)
                    {
                        sum += Number(credit2[i]);
                        twoOrOne = true;
                    }
                    else
                    {
                        let temp = Number(credit2[i])*2;
                        if (temp >= 10)
                        {
                            let dig1 = temp%10
                            let dig2 = Math.floor(temp/10)
                            temp = dig1+dig2;
                        }
                        sum += temp;
                        twoOrOne = false;
                    }
                }
                if ((sum+checkDig)%10 == 0)
                {
                    return true;
                }
                return false;
            }
            else
            {
                return false;
            }
        }

        function validityCheck()
        {
            let validity = document.getElementById("validity-box").value.trim();

            if (validity.length == 5)
            {
                let validityParts = validity.split("/");

                if (validityParts[0] > 0 && validityParts[0] < 13 && validityParts[1] < 100 && validityParts[1] > 26)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        function cvvCheck()
        {
            let cvv = document.getElementById("cvv-box").value.trim();

            if (cvv.length == 3 && cvv != "000")
            {
                return true;
            }
            return false;
        }

        function idCheck()
        {
            let id = document.getElementById("id-box").value.trim();
            if (/^\d+$/.test(id) && id.length == 9)
            {
                let res1 = 0;
                let dig1 = 0;
                let res2 = 0;
                let dig2 = 0;
                
                for(let i = 0; i < id.length; i = i + 2)
                {
                    res1 = res1 + Number(id[i]);
                }
                for(let i = 1; i < id.length; i = i + 2)
                {
                    let temp = Number(id[i])*2;
                    if (temp >= 10)
                    {
                        dig1 = temp%10;
                        dig2 = Math.floor(temp/10);
                        temp = dig1+dig2;
                    }
                    res2 = res2 + temp;
                }
                
                let final = res1+res2;
                if (final%10 == 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        function paymentCheck()
        {
            
            if (validityCheck() && creditCheck() && cvvCheck() && idCheck())
            {
                return true;
            }
            else
            {
                alert("Something is wrong, pleas try again.");
            }
        }
    });
});