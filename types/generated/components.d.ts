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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.cards': LandingCards;
      'landing.features': LandingFeatures;
      'landing.go-unlimited': LandingGoUnlimited;
      'landing.stat-item': LandingStatItem;
    }
  }
}
