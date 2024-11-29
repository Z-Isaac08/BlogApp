from sqlalchemy import Boolean, Integer, String, Column
from database import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Post(Base):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(50))
    content = Column(String(100))
