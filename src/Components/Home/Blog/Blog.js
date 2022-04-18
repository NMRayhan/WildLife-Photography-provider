import React from 'react';

const Blog = () => {
    return (
        <div>
            <article className='p-5'>
                <h3 className='text-primary'>Question <span className='text-success'>Difference between authorization and authentication?</span></h3>
                <h5>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</h5>
                <h5>In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</h5>
            </article>

            <article className='p-5'>
            <h3 className='text-primary'>Question <span className='text-success'>Why are you using firebase? What other options do you have to implement authentication?</span></h3>
            <h5>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</h5>
            <h5>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</h5>
            <h3>other options have to implement authentication</h3>
            <ol>
                <li>Create user with email and pass</li>
                <li>Create user with Google, facebook, Github, Twitter and many more</li>
                <li>Reset Password</li>
                <li>Update user Profile</li>
            </ol>
            </article>
            <article className='p-5'>
            <h3 className='text-primary'>Question <span className='text-success'>What other services does firebase provide other than authentication?</span></h3>

            <h3>Other Services in Firebase</h3>
            <ol>
                <li>Authentication</li>
                <li>Database</li>
                <li>Hosting</li>
                <li>User</li>
            </ol>
            </article>
        </div>
    );
};

export default Blog;