from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models
from schema import PostCreate, PostOut
from database import engine, sessionLocal

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontends autorisés
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Crée toutes les tables en fonction des modèles
models.Base.metadata.create_all(bind=engine)

# Fonction pour obtenir une session de base de données
def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()


# Définir les routes pour les posts
@app.post('/posts/', response_model=PostOut, status_code=status.HTTP_201_CREATED)
async def create_post(post: PostCreate, db: Session = Depends(get_db)):
    db_post = models.Post(**post.model_dump())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

@app.get('/posts/{post_id}', response_model=PostOut, status_code=status.HTTP_200_OK)
async def get_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post inexistant")
    return post

@app.put('/posts/{post_id}', response_model=PostOut, status_code=status.HTTP_200_OK)
async def update_post(post_id: int, updated_post: PostCreate, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post inexistant")
    for key, value in updated_post.model_dump().items():
        setattr(post, key, value)
    db.commit()
    db.refresh(post)  
    return post


@app.get('/posts/', status_code=status.HTTP_200_OK)
async def get_all_posts(db: Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    return posts

@app.delete('/posts/{post_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post inexistant")
    db.delete(post)
    db.commit()
    return {"message": "Post supprimé avec succès"}
