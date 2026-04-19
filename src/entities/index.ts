/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: blogarticles
 * Interface for BlogArticles
 */
export interface BlogArticles {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  fullContent?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  thumbnailImage?: string;
  /** @wixFieldType datetime */
  publishDate?: Date | string;
  /** @wixFieldType text */
  slug?: string;
}


/**
 * Collection ID: bonuses
 * Interface for Bonuses
 */
export interface Bonuses {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  heading?: string;
  /** @wixFieldType text */
  subtitle?: string;
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
 * Collection ID: bonustiers
 * Interface for BonusTiers
 */
export interface BonusTiers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  tierName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  minActiveReferrals?: number;
  /** @wixFieldType number */
  bonusPercentage?: number;
  /** @wixFieldType text */
  additionalRewards?: string;
  /** @wixFieldType number */
  tierOrder?: number;
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
 * Collection ID: disclaimers
 * Interface for Disclaimers
 */
export interface Disclaimers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType datetime */
  lastUpdated?: Date | string;
  /** @wixFieldType boolean */
  isActive?: boolean;
  /** @wixFieldType text */
  displayLocation?: string;
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
  /** @wixFieldType url */
  playLink?: string;
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
