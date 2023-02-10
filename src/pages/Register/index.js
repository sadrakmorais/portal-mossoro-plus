import React, { useState } from 'react';
import * as Yup from 'yup';
import { POST } from '../../services/api';

import Form from '../../components/Form';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer, Aluno } from './styles';

const Register = () => {
	const [isStudent, setIsAluno] = useState(false);
	const level = 1;
	const [cpf, setCPF] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	let [course, setCourse] = useState('');
    const registration = '123456';
    course = "5fbbcb548af6360024abc050"


	const HandleRegister = async (e) => {
		try {
			e.preventDefault();
			const payload = {
				course,
				level,
				name,
				cpf,
				registration,
				isStudent,
				email,
				password,
				phone,
			};
			await POST('/users', payload);
			const validationSchema = Yup.object().shape({
				email: Yup.string().required(),
				cpf: Yup.string().required(),
				password: Yup.string().required(),
				name: Yup.string().required(),
				phone: Yup.string().required(),
			});

			await validationSchema.validate(payload);
            window.location = '/';
            console.log(course)
            alert("Cadastro Finalizado! Realize o Login")
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}

			const { status } = error.response;

			switch (status) {
				case 400:
					return alert('Campos inválidos');
				case 409:
					return alert('CPF já está em uso');
				case 404:
					return alert('Curso não encontrado');
				case 500:
					return alert('Ocorreu um erro que não conseguimos lidar.');
				default:
					return alert('Ocorreu um erro que não conseguimos lidar.');
			}
		}
	};

	return (
		<Container>
			<FormContainer>
				<h1>Cadastro Usuário</h1>
				<Form onSubmit={HandleRegister}>
					<Input
						label='Nome completo'
						value={name}
						onChange={(e) => setName(e.target.value)}></Input>
					<Input
						label='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}></Input>
					<Input label='CPF' value={cpf} onChange={(e) => setCPF(e.target.value)}></Input>
					<Input
						label='Celular'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}></Input>
					<Input
						label='Senha'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}></Input>
					<Aluno>
						<input
							type='checkbox'
							checked={isStudent}
							onChange={() => setIsAluno(!isStudent)}
						/>
						<label>É aluno da UERN?</label>
					</Aluno>
					{isStudent && (
						<div>
							<span>Escolha seu curso</span>
							<select value='option' onChange={(e) => setCourse(e.target.value)}>
								<optgroup label='FANAT'>
									<option value='5fa1ec9f819f2418040ffff7'>
										Ciências Biológicas (Bach.)
									</option>
									<option value='5fa1eca8819f2418040ffff8'>
										Ciências Biológicas (Lic.)
									</option>
									<option value='5fa1ec5f819f2418040ffff4'>
										Ciência da Computação
									</option>
									<option value='5fa1ec6d819f2418040ffff5'>Física</option>
									<option value='5fa1ec80819f2418040ffff6'>Química</option>
									<option value='5fa2eb85770cc50f401d866d'>Matématica</option>
								</optgroup>
								<optgroup label='FACEM'>
									<option value='5fa1eb62819f2418040fffef'>Administração</option>
									<option value='5fa1eba0819f2418040ffff0'>
										Ciência Contábeis
									</option>
									<option value='5fa1ebc3819f2418040ffff1'>
										Ciência Econômicas
									</option>
									<option value='5fa1ec03819f2418040ffff2'>
										Gestão Ambiental
									</option>
									<option value='5fa1ec13819f2418040ffff3'>Turismo</option>
								</optgroup>
								<optgroup label='FALA'>
									<option value='5fa2ed7f770cc50f401d866f'>
										Letras (Língua Portuguesa)
									</option>
									<option value='5fa2ed88770cc50f401d8670'>
										Letras (Língua Inglesa)
									</option>
									<option value='5fa2ed8f770cc50f401d8671'>
										Letras (Língua Espanhola)
									</option>
									<option value='5fa2eda0770cc50f401d8672'>Música</option>
								</optgroup>
								<optgroup label='FAFIC'>
									<option value='5fa209b9819f2418040ffff9'>
										Ciência Sociais (Bach.)
									</option>
									<option value='5fa2ec4a770cc50f401d866e'>
										Ciência Sociais (Lic.)
									</option>
									<option value='5fa20a1a819f2418040ffffa'>
										Comunicação Social (Jornalismo)
									</option>
									<option value='5fa20a27819f2418040ffffb'>
										Comunicação Social (Publicidade e Propaganda)
									</option>
									<option value='5fa20a34819f2418040ffffc'>
										Comunicação Social (Radialismo)
									</option>
									<option value='5fa20a46819f2418040ffffd'>Filosofia</option>
									<option value='5fa20a55819f2418040ffffe'>Geografia</option>
									<option value='5fa20a68819f2418040fffff'>História</option>
								</optgroup>
								<optgroup label='FASSO'>
									<option value='5fa20ac0819f241804100000'>Serviço Social</option>
								</optgroup>
								<optgroup label='FE'>
									<option value='5fa20ad8819f241804100001'>Pedagogia</option>
								</optgroup>
								<optgroup label='FAEF'>
									<option value='5fa20afa819f241804100002'>
										Educação Física (Bach.)
									</option>
									<option value='5fa20b00819f241804100003'>
										Educação Física (Lic)
									</option>
								</optgroup>
								<optgroup label='FAEN'>
									<option value='5fa20b21819f241804100004'>Enfermagem</option>
								</optgroup>
								<optgroup label='FAD'>
									<option value='5fa20b2f819f241804100005'>Direito</option>
								</optgroup>
								<optgroup label='FACS'>
									<option value='5fa20b3f819f241804100006'>Medicina</option>
								</optgroup>
							</select>
						</div>
					)}


					<Button type='submit'>Finalizar Cadastro</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default Register;
