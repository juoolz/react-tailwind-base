import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const CardDemo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-display font-display font-bold text-neutral-900 mb-8 text-center">
        Card Component Demo
      </h1>
      
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        {/* Default Card */}
        <Card 
          title="Default Card" 
          subtitle="Using our neutral color palette"
          elevated
        >
          <p className="text-neutral-600 mb-4">
            This card demonstrates our custom font families, spacing, and shadow styles.
          </p>
          <Button>Default Action</Button>
        </Card>
        
        {/* Primary Card */}
        <Card 
          title="Primary Card" 
          subtitle="Using our primary color palette"
          variant="primary"
          elevated
        >
          <p className="mb-4">
            This card showcases our primary brand colors with custom opacity.
          </p>
          <Button variant="primary">Primary Action</Button>
        </Card>
        
        {/* Secondary Card */}
        <Card 
          title="Secondary Card" 
          subtitle="Using our secondary color palette"
          variant="secondary"
          elevated
        >
          <p className="mb-4">
            This card uses our secondary color palette for a warm accent.
          </p>
          <Button variant="secondary">Secondary Action</Button>
        </Card>
        
        {/* Accent Card */}
        <Card 
          title="Accent Card" 
          subtitle="Using our accent color palette"
          variant="accent"
          elevated
        >
          <p className="mb-4">
            This card features our accent color palette for highlighting important content.
          </p>
          <Button variant="success">Accent Action</Button>
        </Card>
      </div>
      
      {/* Container demo */}
      <div className="container border border-dashed border-neutral-300 p-navbar mt-18 rounded-4xl bg-neutral-50">
        <h2 className="font-display text-heading text-center">Container with Custom Spacing</h2>
        <p className="text-center text-neutral-600">
          This container uses our custom container padding, navbar spacing, and custom border radius.
        </p>
      </div>
    </div>
  );
};

export default CardDemo; 