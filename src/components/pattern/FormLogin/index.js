import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import TextField from '../../form/TextField';
import { Button } from '../../commons/Button';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';

const logingSchema = yup.object().shape({
  usuario: yup.string().required('Usuario é obrigatório').min(3, 'Preencha no mínimo 3 caractéres'),
  senha: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'Senha senha precisa ter ao menos 8 caracteres'),
});

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  // console.log(
  //   'loging schema',
  //   logingSchema
  //     .validate({ usuairo: '', senha: '' }, { abortEarly: false })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.error(err.inner);
  //     }),
  // );

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService
        .login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => {
          router.push('/app/profile');
        });
    },
    async validateSchema(values) {
      return logingSchema.validate(values, { abortEarly: false });
    },
  });
  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      <pre>{JSON.stringify(form.errors, null, 4)}</pre>
    </form>
  );
}
