# Despliegue DevOps – Caso Innovarural

Este repositorio contiene la implementación de un servicio web 
contenedorizado y desplegado en un clúster Kubernetes utilizando prácticas DevOps.
La solución incluye contenerización con Docker, orquestación con Kubernetes, escalabilidad
automática mediante Horizontal Pod Autoscaler (HPA) y pruebas de resiliencia.

---

## 🛠️ Tecnologías utilizadas

- **Node.js** – Servicio web base.
- **Docker** – Contenerización de la aplicación.
- **Kubernetes** – Orquestación de contenedores.
- **Minikube** – Clúster Kubernetes local.
- **Horizontal Pod Autoscaler (HPA)** – Escalabilidad automática basada en CPU.

---

## 📁 Estructura del proyecto

``

- **app/**: Contiene el código de la aplicación Node.js y el Dockerfile.
- **kubernetes/**: Contiene los archivos YAML para el despliegue, exposición y autoescalado en Kubernetes.
- **README.md**: Documentación general del proyecto.

---

## 🚀 Despliegue de la aplicación

1. Construcción de la imagen Docker del servicio.
2. Despliegue de la imagen en Kubernetes mediante un Deployment con múltiples réplicas.
3. Exposición del servicio mediante un Service de tipo NodePort.
4. Implementación de escalabilidad automática con HPA usando métricas de CPU.
5. Pruebas de carga y resiliencia para validar autocuración y escalado dinámico.

---

## ⚖️ Escalabilidad y resiliencia

La solución implementa un **Horizontal Pod Autoscaler** que ajusta automáticamente el número de Pods en función del consumo de CPU.  
Además, Kubernetes garantiza la **autocuración**, recreando Pods eliminados o fallidos sin intervención manual.

Estas características aseguran alta disponibilidad y adaptación dinámica a la demanda del sistema.

---

## 📊 Arquitectura de la solución

La arquitectura se basa en un clúster Kubernetes donde el tráfico de usuario es gestionado por un Service que balancea la carga entre múltiples Pods. El Deployment mantiene el estado deseado de la aplicación, mientras que el HPA regula la cantidad de réplicas utilizando métricas recolectadas por el Metrics Server.

---

## ✅ Resultados obtenidos

- Despliegue funcional del servicio en Kubernetes.
- Acceso externo validado mediante NodePort.
- Escalabilidad automática comprobada con carga artificial.
- Resiliencia demostrada mediante eliminación controlada de Pods.
- Cumplimiento de los principios DevOps y despliegue continuo.

---

## 👤 Autor
JAVIER IVAN SANJUANELO ROBLES
**William Chavez Fajardo**  
Estudiante de Posgrado  
Proyecto académico – DevOps y Despliegue Continuo
