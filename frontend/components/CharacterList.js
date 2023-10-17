import React from "react";
import Character from "./Character";

export default function CharacterList(props) {
    const { planets, people } = props;

    if (planets && people) {
        return (
        <div>
            {people.map((person) => {
                return (<Character person={person} planets={planets} key={person.id} />)
            })}
        </div>
    )
    }
}