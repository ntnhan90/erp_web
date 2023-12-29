'use client'
import AdminLayout from "@layouts/layout";
import { Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { PokemonModel } from '@models/pokemon';
import PokemonForm from '@components/pokemon/PokemonForm';

export type Props = {
  pokemon: PokemonModel;
}

export default function PokemonEdit(props: Props) {
	const { pokemon } = props;
	console.log(pokemon);
	const router = useRouter();
	return (
		<AdminLayout>
			<button type="button" onClick={() => router.back()}>
     	 		Click here to go back
    		</button>
			Pokemon Edit
		</AdminLayout>
	)
}
