# UTM-Tracker
Script que toma los parámetros utm de la url y los pasa como parámetro a los links del sitio que van a otras urls externas para seguimiento de funnel.

Para que funcione incluir el archivo JS en la página de destino de la campaña y si tiene links a sitios externos para los cuales queramos trackear la fuente de tráfico, simplemente agregar a los links o iframe la clase external. Es script se encargará de tomar los parametros utm de la url y agregarlos dinámicamente a estos links para que el sitio de destino sepa que fuente de tráfico originó la visita. 