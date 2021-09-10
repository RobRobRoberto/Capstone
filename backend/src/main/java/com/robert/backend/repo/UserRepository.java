package com.robert.backend.repo;

import com.robert.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//Dieses repo kümmert sich um UserEntity.
//Und weil es als key einen long Wert hat, muss ich hier als key den long Wert verwenden.
//Da ich in der JpaConfig angeben habe, dass in diesem Ordner nur Repos vorhanden sind,
//muss ich dieses Repo nicht noch zusätzlich flaggen. Deshalb ist das Bean automatisch erzeugt worden.
//Generics sind eine Ummantelung, um mit diesem Objekt weiter arbeiten zu können.
@Repository
public interface UserRepository extends JpaRepository <UserEntity,Long>{

    //Query. Findby.. ist eine Standard Funktion JPA.
    // Gelbe Fehlermeldungen von Inteliij sind ultra gut!
    Optional<UserEntity> findByUserName(String name);



}
