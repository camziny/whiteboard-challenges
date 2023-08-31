// types/index.d.ts

export interface IUser {
  first_name: string;
  last_name?: string;
  user_name?: string;
  occupation?: string;
  password?: string;
  email?: string;
  location?: string;
  profile_image?: string;
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
  categories?: string;
  website?: string;
  postal_code?: string;
  province?: string;
  country?: string;
  phone_number?: string;
}
