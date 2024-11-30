export class CreateDriverDto {
  user: {
    name: string;
    email: string;
    password: string;
    phone: string;
    profilePicture?: string;
  };

  vehicleType: string;
  vehicleRegistration: string;
  isAvailable?: boolean;
}
