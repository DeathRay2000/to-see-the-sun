
CREATE DATABASE alchemyDB

CREATE TABLE recipes{
    ID int NOT NULL
    recipeName varchar(50) NOT NULL,
    ingredients varchar(1000) NOT NULL,
    recipedescription varchar(2000) NOT NULL,
    recipevalue int NOT NULL
    PRIMARY KEY(ID)
    
}
ALTER TABLE recipes
ADD expyield int NOT NULL

INSERT INTO recipes  (ID, recipeName, Ingredients, recipedescription, recipevalue, expyield) VALUES (1, 'blood', '[iron, brugmansia, cranberry]', 'Ive figured out how to create artificial blood.  Not as good as the real thing but it will do.  No more hurting innocent people!', 100, 10)

