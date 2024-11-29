from pydantic import BaseModel

# Modèle pour afficher les posts
class PostBase(BaseModel):
    title: str
    content: str

class PostCreate(PostBase):
    pass

class PostOut(PostBase):
    id: int

    class Config:
        orm_mode = True
