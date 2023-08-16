
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
    const {
        register,
        handleSubmit,
        reset, // Obtener la función reset de useForm
        formState: { errors }
    } = useForm();
    const { signup, isAuthenticated, errors: errorRegistro } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });


    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>
            {
                errorRegistro.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))
            }

            <form
                className='bg-gray-800 p-10 rounded-md shadow-md'
                onSubmit={onSubmit}
            >
                <h3 className="font-bold mb-4">Registro</h3>

                <input
                    className='block w-full p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded'
                    type='text'
                    {...register('name', { required: true })}
                    placeholder='Usuario'
                />
                {errors.name && (<p className='text-red-500'>Usuario requerido</p>)}
                <input
                    className='block w-full p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded'
                    type='password'
                    {...register('password', { required: true })}
                    placeholder='Password'
                />
                {errors.password && (<p className='text-red-500'>Password requerido</p>)}
                <div className="flex justify-between">
                    <button
                        className='w-full py-2 mt-4 mr-2 bg-gray-600 text-white rounded hover:bg-gray-700'
                        type='submit'
                    >
                        Registrarse
                    </button>
                    <button
                        className='w-full py-2 mt-4 ml-2 bg-red-600 text-white rounded hover:bg-red-700'
                        type='button'
                        onClick={() => {
                            reset(); // Llamada a la función reset para limpiar los campos
                        }}
                    >
                        Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
