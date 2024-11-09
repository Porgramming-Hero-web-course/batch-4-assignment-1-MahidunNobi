interface Profile {
    name: string,
    age: number,
    email: string
}

const updateProfile = (obj: Profile, newObj: Partial<Profile>)=>{
    return {...obj, ...newObj}
}

const myProfile = {
    name: "Olid",
    age: 22,
    email: "olid@mail.com"
}
