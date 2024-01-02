import React from 'react'
import { newResource, Resource } from '@models/resource'
import { PokemonModel } from '@models/pokemon'
import { SearchParams } from '@types/next'
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AdminLayout from "@layouts/layout";

export default function Page({ searchParams }: { searchParams: SearchParams }) {

    return (
        <AdminLayout>
            
            <Card>
                <Card.Header>Pokémon</Card.Header>
                <Card.Body>
                  <div className="mb-3 text-end">
                    <Button variant="success" onClick={() => router.push('/pokemons/create')}>
                      <FontAwesomeIcon icon={faPlus} fixedWidth />
                      Add new
                    </Button>
                  </div>
                </Card.Body>
            </Card>
        </AdminLayout>
    )
}
