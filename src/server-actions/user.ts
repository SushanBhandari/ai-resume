"use server";
import { connectMongoDB } from "@/config/database";
import userModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";

connectMongoDB();

export const getCurrentUserFromMongoDB = async () => {
  try {
    //get the clerk user data
    const clerkUser = await currentUser();
    const clerkUserId = clerkUser?.id;
    //check if the user exists in the database if yes return user
    const user = await userModel.findOne({ clerkUserId });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }
    //if not create a new user in the datanbase and return user
    const userObj = {
      clerkUserId,
      name: clerkUser?.firstName + " " + clerkUser?.lastName,
      email: clerkUser?.emailAddresses[0].emailAddress,
      profilePictureUrl: clerkUser?.imageUrl,
      profileDataForResume: {},
    };

    const newUser = new userModel(userObj);
    await newUser.save();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
