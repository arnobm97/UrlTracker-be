import type { Schema, Struct } from '@strapi/strapi';

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
      'landing.stat-item': LandingStatItem;
    }
  }
}
