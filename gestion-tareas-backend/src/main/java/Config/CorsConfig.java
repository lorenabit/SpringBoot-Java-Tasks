/*
package Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CorsConfig implements WebMvcConfigurer {

    //Agregar configuraciones CORS
    @Override
    public void addCorsMappings(CorsRegistry registry) {
         //Solicitudes desde cualquier origen, con GET, POST, PUT y DELETE
        //Permite el uso de credenciales (cookies)
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);
    }
}

* estas configuraciones son más seguras pero para este tipo de prácticas que es para uso didáctico,
he usado otra configuración más sencialla


*/
    
    
    
    

