import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Card {
  title: string;
  description: string;
  boardId: string;
  listId: string;
}

interface Board {
  id: string;
  name: string;
  lists: List[];
}

interface List {
  id: string;
  name: string;
  cards: Card[];
}

const App: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [lists, setLists] = useState<List[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [token, setToken] = useState<string | null>(null);

  const handleRegister = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setToken(data.token);
  };

  const handleLogin = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setToken(data.token);
  };

  const handleGetBoards = async () => {
    if (token) {
      const response = await fetch(`${API_URL}/api/boards`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setBoards(data);
    }
  };

  const handleCreateBoard = async (name: string) => {
    if (token) {
      const response = await fetch(`${API_URL}/api/boards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      setBoards([...boards, data]);
    }
  };

  const handleGetLists = async (boardId: string) => {
    if (token) {
      const response = await fetch(`${API_URL}/api/boards/${boardId}/lists`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setLists(data);
    }
  };

  const handleCreateList = async (boardId: string, name: string) => {
    if (token) {
      const response = await fetch(`${API_URL}/api/boards/${boardId}/lists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      setLists([...lists, data]);
    }
  };

  const handleGetCards = async (boardId: string, listId: string) => {
    if (token) {
      const response = await fetch(`${API_URL}/api/boards/${boardId}/lists/${listId}/cards`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCards(data);
    }
  };

  const handleCreateCard = async (boardId: string, listId: string, title: string, description: string) => {
    if (token) {
      const response = await fetch(`${API_URL}/api/boards/${boardId}/lists/${listId}/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      setCards([...cards, data]);
    }
  };

  return (
    <div>
      <button onClick={() => handleRegister('username', 'password')}>Register</button>
      <button onClick={() => handleLogin('username', 'password')}>Login</button>
      <button onClick={handleGetBoards}>Get Boards</button>
      <button onClick={() => handleCreateBoard('Board Name')}>Create Board</button>
      <button onClick={() => handleGetLists('boardId')}>Get Lists</button>
      <button onClick={() => handleCreateList('boardId', 'List Name')}>Create List</button>
      <button onClick={() => handleGetCards('boardId', 'listId')}>Get Cards</button>
      <button onClick={() => handleCreateCard('boardId', 'listId', 'Card Title', 'Card Description')}>Create Card</button>
      <ul>
        {boards.map((board) => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
      <ul>
        {cards.map((card) => (
          <li key={card.title}>{card.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;