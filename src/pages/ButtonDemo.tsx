import React from 'react';
import Button from '../components/UI/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonDemo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Button Component Demo</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Button Variants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="warning">Warning Button</Button>
          <Button variant="info">Info Button</Button>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Button Sizes</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Rounded Buttons</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button rounded>Rounded Button</Button>
          <Button variant="secondary" rounded>Rounded Secondary</Button>
          <Button variant="success" rounded>Rounded Success</Button>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Full Width Buttons</h2>
        <div className="space-y-4">
          <Button fullWidth>Full Width Button</Button>
          <Button variant="secondary" fullWidth>Full Width Secondary</Button>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">With Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            startIcon={<AddIcon />}
          >
            With Start Icon
          </Button>
          <Button 
            variant="secondary"
            endIcon={<ArrowForwardIcon />}
          >
            With End Icon
          </Button>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Disabled Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo; 