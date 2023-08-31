// types/index.d.ts

export interface IUser {
  email: string;
  name: string;
  password: string;
  occupation: string;
  role: string;
  profile_image: string;
}

export interface IPost {
  user_id: number;
  poi_id: number;
  rating?: number;
  comments?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IPointOfInterest {
  title: string;
  description?: string;
  longitude?: number;
  latitude?: number;
  price?: number;
  city?: string;
  category?: string;
  website?: string;
  postal_code?: string;
  province?: string;
  country?: string;
  phone_number?: string;
}
