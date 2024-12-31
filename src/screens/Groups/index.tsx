import { Header } from "@/src/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/src/components/Highlight";
import { GroupCard } from "@/src/components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@/src/components/ListEmpty";
import { Button } from "@/src/components/Button";

export default function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    return (
        <Container>
            <Header />
            <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard 
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar uma primeira turma?"/>
                )}
            />

            <Button title="Criar nova turma"/>

        </Container>
    )
}