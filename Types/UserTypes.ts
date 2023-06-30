export interface HashtagDto {
  id: number;
  name: string;
}

export interface CategoryDto {
  id: number;
  name: string;
}

export interface MentorProfileDto {
  id: number;
  shortDescription: string;
  description: string;
  isHide: boolean;
  createdAt: string;
  updatedAt: string;
  hashtags: HashtagDto[];
  categories: CategoryDto[];
}

export interface UserDto {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  isMentor: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  mentorProfile: MentorProfileDto;
}
