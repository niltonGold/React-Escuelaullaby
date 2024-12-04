import './styles.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';





export const Formulario = () => {


  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState('');

  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {

        e.preventDefault();

        const { nombre, email, mensaje } = formData;

        // Validación de campos obligatorios
        if (!nombre || !email || !mensaje) {
          setError('Todos los campos son obligatorios.');
          return;
        }

        setError('');
        
        setIsSubmitting(true);

        // Configuración de EmailJS
        emailjs
          .send(
            'service_aiddyaw', // Reemplaza con tu Service ID de EmailJS
            'template_m9seg7d', // Reemplaza con tu Template ID de EmailJS
            { nombre, email, mensaje }, // Datos que se enviarán
            'r_-18lB31SJkvZzPx' // Reemplaza con tu User ID de EmailJS
          )
          .then(() => {
            setSuccess('Mensaje enviado con éxito.');
            setFormData({ nombre: '', email: '', mensaje: '' });
          })
          .catch(() => setError('Error al enviar el mensaje. Inténtalo más tarde.'))
          .finally(() => setIsSubmitting(false));

  };


  return (
    <>


        <div className="Formulario-Principal-Container">
                
                <div className='formulario-Titulo'>Contacta con nosotros:</div>
                
                <form className="form-container" onSubmit={handleSubmit}>
                    
                    
                    <div className="form-group">
                            
                            <div className='form-label-dosPuntos-container'>

                                    <label htmlFor="nombre">NOMBRE</label>

                                    <div className='form-dos-puntos'>:</div>

                            </div>

                            <input
                                className='form-input'
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />

                    </div>

                    <div className="form-group">
                            
                            <div className='form-label-dosPuntos-container'>

                                    <label htmlFor="email">EMAIL</label>

                                    <div className='form-dos-puntos'>:</div>

                            </div>

                            <input
                                className='form-input'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />

                    </div>

                    <div className="form-group">

                            <div className='form-label-dosPuntos-container form-label-mensaje'>

                                <label htmlFor="mensaje">MENSAJE</label>

                                <div className='form-dos-puntos'>:</div>

                            </div>

                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                            />

                    </div>

                    {error && <p className="error">{error}</p>}
                    
                    {success && <p className="success">{success}</p>}
                    
                    <div className='form-button-container'>

                            <button type="submit" disabled={isSubmitting}>
                            
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                            
                            </button>

                    </div>
                    
                </form>
                
        </div>


    </>
  );
};

