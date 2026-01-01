import bycrypt from 'bcryptjs';
import User from '/models/User.js';
import { use } from 'react';

// Creating a userSeed file is a good practice at architecture level.
// This file is used to seed the admins. It is very important to pre-fetch at least one user as an admin in the database.
// Is we create admin from frontend, people can easily inspect the code and create admin accounts for themselves.

const userRegister = async() =>
{
    try{
        const newUser = new User({
            username: "admin",
            email: "admin@gmail.com",
            password: bycrypt.hashSync("Admin@1234", 10),
            phone: 7387776883,
            role: "admin"
        })

        await newUser.save();
        console.log("Admin user seeded successfully");
    }

    catch(error)
    {
        console.log("Error seeding admin user:", error);
    }
}

userRegister();