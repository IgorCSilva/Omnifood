<template lang="pug">
    
    section.section-form
        div.row
            h2 We're happy to hear from you

        div.row 
            form.contact-form(method="post" action="#")
                div.row 
                    div.col.span_1_of_3
                        label(for="name") Name                     
                    div.col.span_2_of_3
                        input#name(
                            type="text" 
                            name="name"
                            placeholder="Your name"
                            required
                        )
                div.row 
                    div.col.span_1_of_3
                        label(for="email") E-mail                  
                    div.col.span_2_of_3
                        input#email(
                            type="email" 
                            name="email"
                            placeholder="Your e-mail"
                            required
                        )
                div.row 
                    div.col.span_1_of_3
                        label(for="find-us") How did you find us?                 
                    div.col.span_2_of_3
                        select#find-us(name="find-us")
                            option(value="friends" selected ) Friends
                            option(value="search") Search engine 
                            option(value="ad") Advertisement
                            option(value="other") Other
                    
                div.row 
                    div.col.span_1_of_3
                        label(for="news") Newsletter?                 
                    div.col.span_2_of_3
                        input#news(type="checkbox" name="news" checked)
                        | Yes, please

                div.row 
                    div.col.span_1_of_3
                        label Drop us a line             
                    div.col.span_2_of_3
                        textarea(name="message" placeholder="Your message")
                        
                div.row 
                    div.col.span_1_of_3
                        label &nbsp;                 
                    div.col.span_2_of_3
                        input(type="submit" value="Send it!") 
</template>


<style scoped>

    .contact-form {
        width: 60%;
        margin: 0 auto;
    }



    input[type=text],
    input[type=email],
    select,
    textarea {
        width: 100%;
        padding: 2px;
        border-radius: 3px;
        border: 1px solid #ccc;
    }

    textarea {
        height: 100px;
    }

    input[type=checkbox] {
        margin: 10px 5px 10px 0;
    }

    *:focus {
        outline: none;
    }

    /* Small tablets to big tablets: from 768px to 1023px */
/* iPad landscape mede 1024px */
@media only screen and (max-width: 1023px) {
    .contact-form {
        width: 80%;
    }

    
}

@media only screen and (max-width: 480px) {
    .contact-form {
        width: 100%;
    }

    
}
</style>
