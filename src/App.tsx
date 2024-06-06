import { useForm, SubmitHandler } from 'react-hook-form'
import './App.css'

type Inputs = {
  nome: string;
  email: string;
  telefone: string;
}

function App() {
  const {
    handleSubmit,
    register,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (e) => {
    console.log(e);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <fieldset>

          <label> Nome: </label>
          <input {...register('nome')} />

        </fieldset>

        <fieldset>

          <label> Email: </label>
          <input {...register('email')} />

        </fieldset>

        <fieldset>

          <label> Telefone: </label>
          <input {...register('telefone')} />
          
        </fieldset>


        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
