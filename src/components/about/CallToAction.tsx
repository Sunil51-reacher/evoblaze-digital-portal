
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-evoblaze-blue text-white section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Let's collaborate to create digital marketing strategies that drive 
          your business forward across borders.
        </p>
        <Button asChild className="bg-evoblaze-orange hover:bg-evoblaze-orange/90 text-white">
          <Link to="/contact" className="flex items-center gap-2">
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
