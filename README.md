#Documentación de la Aplicación WhatToWear

##1. Definiciones y Especificación de Requerimientos
Definición General del Proyecto de Software
La aplicación WhatToWear tiene como objetivo proporcionar recomendaciones de vestimenta basadas en las condiciones climáticas actuales. La funcionalidad principal del proyecto de software es ayudar a los usuarios a tomar decisiones informadas sobre su vestimenta de acuerdo con el clima. El propósito principal es mejorar la comodidad de los usuarios y garantizar que estén adecuadamente vestidos para las condiciones climáticas prevalecientes.

Especificación de Requerimientos del Proyecto
Los requerimientos técnicos y generales del proyecto son los siguientes:
- Requerimientos Técnicos: La aplicación debe integrarse con una API de pronóstico del tiempo para obtener datos meteorológicos en tiempo real. Debe contar con una interfaz de usuario amigable para que los usuarios ingresen prendas de vestir y preferencias. El algoritmo utilizado para las recomendaciones de vestimenta considerará la temperatura, la humedad y las condiciones climáticas. Se ofrecen opciones de personalización para los tipos de prendas de vestir y las preferencias de temperatura.
- Ámbito y Limitaciones: La aplicación se centrará en proporcionar recomendaciones para prendas de vestir en función del clima actual. No incluirá funciones como compras de ropa ni almacenamiento de perfiles de usuario.
- Plataforma y Entorno: WhatToWear está diseñado para funcionar en varios navegadores web. Requiere acceso a Internet para obtener datos climáticos.

Procedimientos de Instalación y Prueba
La obtención, instalación y prueba de la aplicación se realizan de la siguiente manera:
- Obtención: Los usuarios pueden acceder a la aplicación WhatToWear a través de un navegador web. No es necesario realizar una instalación en el dispositivo.
- Prueba del Sistema: Los usuarios pueden utilizar la aplicación de manera inmediata después de acceder a ella. No se requieren pruebas de instalación, ya que la aplicación se ejecuta en el navegador.

##2. Arquitectura del Sistema
Descripción Jerárquica
Los componentes de la aplicación WhatToWear se organizan jerárquicamente de la siguiente manera:
- Interfaz de Usuario: Gestiona las interacciones y entradas de los usuarios.
- Almacenamiento de Datos en LocalStorage: Almacena las prendas de vestir proporcionadas por los usuarios en formato JSON en el Almacenamiento local de los usuarios.
- Integración con API del Clima: Recupera datos climáticos en tiempo real de una API externa.
- Motor de Recomendación: Analiza los datos climáticos y las prendas de vestir del usuario para generar recomendaciones.

Dependencias Externas
La aplicación WhatToWear depende de los siguientes servicios y bibliotecas externas:
- API del Clima: Proporciona datos climáticos en tiempo real para su análisis en la aplicación.
- Navegador Web: La aplicación es accesible a través de navegadores web.

##3. Diseño del Modelo de Datos
El modelo de datos para WhatToWear incluye las siguientes entidades:
- Usuario: Representa a los usuarios de la aplicación y almacena sus preferencias y prendas.
- Prenda de Vestir: Describe las prendas de vestir individuales proporcionadas por los usuarios, incluyendo su nombre, tipo y calificación de temperatura.
- Datos del Clima: Contiene información sobre las condiciones climáticas actuales, como temperatura, humedad y condiciones climáticas.
- Recomendación: Almacena las recomendaciones de vestimenta generadas por la aplicación en función de los datos climáticos y las preferencias del usuario.

Relaciones de datos
Las relaciones entre estas entidades se establecen de la siguiente manera:
- Un Usuario puede tener múltiples Prendas de Vestir y Recomendaciones.
- Una Prenda de Vestir está asociada a un Usuario.
- Una Recomendación se genera para un Usuario específico en función de los Datos del Clima.
