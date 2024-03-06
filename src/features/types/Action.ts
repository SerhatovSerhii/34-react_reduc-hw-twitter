type Action = 
    | { type: 'changeName', name: string | null }
    | { type: 'changeAvatar', url: string | null }
    | { type: 'changeStats', payload: number };
    
export default Action