{
    interface Profile {
        name: string,
        age: number,
        email: string
    }
    
    const updateProfile = (obj: Profile, newObj: Partial<Profile>)=>{
        return {...obj, ...newObj}
    }
}

