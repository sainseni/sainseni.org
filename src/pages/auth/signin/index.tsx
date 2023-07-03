import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

export default function Login() {
    const { data: session } = useSession();

    return (
        <div className=''>
            {!session ? (
                <>
                    <p>Not signed in</p>
                    <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            ) : (
                <>
                    <h4>Signed in as {session.user.name}</h4>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </div>
    );
}
