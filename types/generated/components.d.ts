import type { Schema, Struct } from '@strapi/strapi';

export interface LandingCards extends Struct.ComponentSchema {
  collectionName: 'components_landing_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LandingFeatures extends Struct.ComponentSchema {
  collectionName: 'components_landing_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    bgImageLeft: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bgImageRight: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    brandImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    brandTitle: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'landing.cards', true>;
    description: Schema.Attribute.Text;
    goUnlimited: Schema.Attribute.Component<'landing.go-unlimited', false>;
    highlight: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    images2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LandingGoUnlimited extends Struct.ComponentSchema {
  collectionName: 'components_landing_go_unlimiteds';
  info: {
    displayName: 'goUnlimited';
  };
  attributes: {
    activeUserText: Schema.Attribute.String;
    badge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    userImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LandingListItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_list_items';
  info: {
    description: 'List item for Why Choose Us section';
    icon: 'check';
    name: 'list-item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface LandingModal extends Struct.ComponentSchema {
  collectionName: 'components_landing_modals';
  info: {
    description: 'Modal component for Live Support and Happiness Rating';
    icon: 'window';
    name: 'modal';
  };
  attributes: {
    additionalInfo: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    label: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LandingReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_review_cards';
  info: {
    description: 'Individual review card with quote, rating, author and company';
    icon: 'quote';
    name: 'review-card';
  };
  attributes: {
    author: Schema.Attribute.String;
    company: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String;
  };
}

export interface LandingReviewsSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_reviews_section';
  info: {
    description: 'Reviews section with top gradient part and review carousel';
    icon: 'star';
    name: 'reviews-section';
  };
  attributes: {
    reviews: Schema.Attribute.Component<'landing.review-card', true>;
    reviewsBadge: Schema.Attribute.String;
    reviewsSubtitle: Schema.Attribute.Text;
    reviewsTitle: Schema.Attribute.String;
    topButtonText: Schema.Attribute.String;
    topDescription: Schema.Attribute.Text;
    topImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    topTitle: Schema.Attribute.String;
  };
}

export interface LandingStatItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_stat_items';
  info: {
    displayName: 'Stat Item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Transactions'>;
    number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2341+'>;
  };
}

export interface LandingUsefulFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_useful_feature_cards';
  info: {
    description: 'Individual useful feature card with title, description and icon';
    icon: 'check';
    name: 'useful-feature-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LandingUsefulFeatures extends Struct.ComponentSchema {
  collectionName: 'components_landing_useful_features';
  info: {
    description: 'Useful features section with badge, title and feature cards';
    icon: 'star';
    name: 'useful-features';
  };
  attributes: {
    badge: Schema.Attribute.String;
    bg_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bg_shape: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    features: Schema.Attribute.Component<'landing.useful-feature-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_landing_why_choose_us';
  info: {
    description: 'Why Choose Us section with image, modals, badge, title, description, list items and button';
    icon: 'star';
    name: 'why-choose-us';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttonColor: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    happinessRating: Schema.Attribute.Component<'landing.modal', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listItems: Schema.Attribute.Component<'landing.list-item', true>;
    liveSupport: Schema.Attribute.Component<'landing.modal', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.cards': LandingCards;
      'landing.features': LandingFeatures;
      'landing.go-unlimited': LandingGoUnlimited;
      'landing.list-item': LandingListItem;
      'landing.modal': LandingModal;
      'landing.review-card': LandingReviewCard;
      'landing.reviews-section': LandingReviewsSection;
      'landing.stat-item': LandingStatItem;
      'landing.useful-feature-card': LandingUsefulFeatureCard;
      'landing.useful-features': LandingUsefulFeatures;
      'landing.why-choose-us': LandingWhyChooseUs;
    }
  }
}
