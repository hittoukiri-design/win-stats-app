/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: bonuses
 * Interface for Bonuses
 */
export interface Bonuses {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  bonusTitle?: string;
  /** @wixFieldType text */
  rewardDetails?: string;
  /** @wixFieldType text */
  eligibilityCriteria?: string;
  /** @wixFieldType text */
  termsAndConditions?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  promotionalImage?: string;
}


/**
 * Collection ID: contactinquiries
 * Interface for ContactInquiries
 */
export interface ContactInquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  userName?: string;
  /** @wixFieldType text */
  emailAddress?: string;
  /** @wixFieldType text */
  inquirySubject?: string;
  /** @wixFieldType text */
  messageContent?: string;
  /** @wixFieldType datetime */
  submissionTimestamp?: Date | string;
}


/**
 * Collection ID: gamecategories
 * Interface for GameCategories
 */
export interface GameCategories {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  categoryName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  categoryImage?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: games
 * Interface for Games
 */
export interface Games {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  gameTitle?: string;
  /** @wixFieldType text */
  gameCategory?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  thumbnailImage?: string;
  /** @wixFieldType url */
  playLink?: string;
}


/**
 * Collection ID: informationguides
 * Interface for InformationGuides
 */
export interface InformationGuides {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  guideTitle?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  topicCategory?: string;
  /** @wixFieldType url */
  helpfulLink?: string;
}
