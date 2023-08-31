// controllers/pointOfInterest.controller.ts
import { Request, Response } from "express";
import { PointOfInterest } from "../models/pointOfInterest.model"; // Adjust the path as needed
import { User } from "../models/user.model"; // Adjust the path as needed
import { IPointOfInterest } from "../types"; // Adjust the path as needed

export const createPointOfInterest = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      longitude,
      latitude,
      price,
      city,
      category,
      website,
      postal_code,
      province,
      country,
      phone_number,
    }: IPointOfInterest = req.body;

    const userId = req.user.id; // Assuming you have the authenticated user's ID

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const newPointOfInterest = await PointOfInterest.create({
      title,
      description,
      longitude,
      latitude,
      price,
      city,
      category,
      website,
      postal_code,
      province,
      country,
      phone_number,
      UserId: user.id, // Associate the point of interest with the user
    });

    return res
      .status(201)
      .send({ message: "Point of interest created successfully" });
  } catch (error) {
    console.error("Error in createPointOfInterest:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const getPointOfInterests = async (req: Request, res: Response) => {
  try {
    const pointOfInterests = await PointOfInterest.findAll();

    return res.status(200).send(pointOfInterests);
  } catch (error) {
    console.error("Error in getPointOfInterests:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const updatePointOfInterest = async (req: Request, res: Response) => {
  try {
    const pointOfInterestId = req.params.id;
    const updatedPointOfInterest: IPointOfInterest = req.body;

    const pointOfInterestToUpdate = await PointOfInterest.findByPk(
      pointOfInterestId
    );

    if (!pointOfInterestToUpdate) {
      return res.status(404).send("Point of interest not found");
    }

    // Update point of interest attributes using object destructuring
    for (const [key, value] of Object.entries(updatedPointOfInterest)) {
      if (pointOfInterestToUpdate[key] !== undefined) {
        pointOfInterestToUpdate[key] = value;
      }
    }

    await pointOfInterestToUpdate.save();

    return res
      .status(200)
      .send({ message: "Point of interest updated successfully" });
  } catch (error) {
    console.error("Error in updatePointOfInterest:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const deletePointOfInterest = async (req: Request, res: Response) => {
  try {
    const pointOfInterestId = req.params.id;

    const pointOfInterestToDelete = await PointOfInterest.findByPk(
      pointOfInterestId
    );

    if (!pointOfInterestToDelete) {
      return res.status(404).send("Point of interest not found");
    }

    await pointOfInterestToDelete.destroy();

    return res
      .status(200)
      .send({ message: "Point of interest deleted successfully" });
  } catch (error) {
    console.error("Error in deletePointOfInterest:", error);
    return res.status(500).send("Internal Server Error");
  }
};
