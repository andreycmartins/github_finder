import { UserProps } from "../types/user"

import React, { useState } from "react"
import Search from "../components/Search"
import { User } from "../components/User"

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: String) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    const { avatar_url, login, location, followers, following } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    }

    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
      {user && <p>{user.location}</p>}
      {user && <p>{user.followers}</p>}
      {user && <p>{user.following}</p>}
    </div>
  )
}

export default Home
