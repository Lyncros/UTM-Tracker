# UTM-Tracker
Script que toma los parámetros utm de la url y los pasa como parámetro a los links del sitio que van a otras urls externas para seguimiento de funnel.

Para que funcione incluir el archivo JS en la página de destino de la campaña y si tiene links a sitios externos para los cuales queramos trackear la fuente de tráfico, simplemente agregar a los links o iframe la clase external. Es script se encargará de tomar los parametros utm de la url y agregarlos dinámicamente a estos links para que el sitio de destino sepa que fuente de tráfico originó la visita. 

## Script para angular

Para agregar la funcionalidad de captura en angular.

1. Agregar el archivo **angularCapturaUTM.js** en la aplicación e incluirlo antes del app.js (Archivo principal de angular).

2. Agregar el módulo **'capturaUTM'**.

3. En el controlador de la vista en la que se quiere capturar se debe agregar la dependencia a  **capturaUTM** y para inicializarlo se debe llamar la función **captura()** del servicio, pasando como parámetro el nombre de la clase.

**Ejemplo:** capturaUTM.captura('external');