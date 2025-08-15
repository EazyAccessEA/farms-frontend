// PuredgeOS V1: Loading States Component
// Apple-level feedback systems for immediate and delightful user response

import React from 'react';

// 🎨 Skeleton Loading Component
export const SkeletonLoader: React.FC<{
  type: 'card' | 'text' | 'button' | 'image';
  className?: string;
}> = ({ type, className = '' }) => {
  const baseClasses = 'skeleton rounded-lg animate-pulse';
  
  switch (type) {
    case 'card':
      return (
        <div className={`${baseClasses} h-64 p-6 ${className}`}>
          <div className="skeleton h-8 w-3/4 mb-4 rounded"></div>
          <div className="skeleton h-4 w-full mb-2 rounded"></div>
          <div className="skeleton h-4 w-2/3 mb-4 rounded"></div>
          <div className="flex gap-2 mb-4">
            <div className="skeleton h-6 w-16 rounded-full"></div>
            <div className="skeleton h-6 w-20 rounded-full"></div>
          </div>
          <div className="skeleton h-10 w-full rounded-lg"></div>
        </div>
      );
    
    case 'text':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="skeleton h-6 w-full mb-2 rounded"></div>
          <div className="skeleton h-4 w-3/4 mb-2 rounded"></div>
          <div className="skeleton h-4 w-1/2 rounded"></div>
        </div>
      );
    
    case 'button':
      return (
        <div className={`${baseClasses} h-12 w-32 rounded-lg ${className}`}></div>
      );
    
    case 'image':
      return (
        <div className={`${baseClasses} h-48 w-full rounded-xl ${className}`}></div>
      );
    
    default:
      return <div className={`${baseClasses} h-4 w-full ${className}`}></div>;
  }
};

// 🎭 Farm Card Skeleton
export const FarmCardSkeleton: React.FC = () => {
  return (
    <div className="card animate-pulse">
      <div className="skeleton h-48 w-full rounded-xl mb-4"></div>
      <div className="skeleton h-6 w-3/4 mb-2 rounded"></div>
      <div className="skeleton h-4 w-1/2 mb-4 rounded"></div>
      <div className="flex gap-2 mb-4">
        <div className="skeleton h-6 w-16 rounded-full"></div>
        <div className="skeleton h-6 w-20 rounded-full"></div>
        <div className="skeleton h-6 w-14 rounded-full"></div>
      </div>
      <div className="skeleton h-10 w-full rounded-lg"></div>
    </div>
  );
};

// 🎯 Loading Spinner with Context
export const LoadingSpinner: React.FC<{
  context: 'farms' | 'map' | 'search' | 'general';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ context, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const contextMessages = {
    farms: 'Finding the freshest farms near you...',
    map: 'Loading your local farm map...',
    search: 'Searching for fresh produce...',
    general: 'Loading...'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-primary-200 border-t-primary-600`}></div>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {contextMessages[context]}
      </p>
    </div>
  );
};

// 🎨 Progress Bar with Context
export const ProgressBar: React.FC<{
  progress: number;
  context: string;
  className?: string;
}> = ({ progress, context, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">{context}</span>
        <span className="text-sm font-medium text-primary-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// 🎭 Success State Component
export const SuccessState: React.FC<{
  title: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
  className?: string;
}> = ({ title, message, action, icon, className = '' }) => {
  return (
    <div className={`card text-center ${className}`}>
      <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
        {icon || (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
      {action && (
        <button 
          onClick={action.onClick}
          className="btn btn-primary"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

// 🚨 Error State Component
export const ErrorState: React.FC<{
  title: string;
  message: string;
  retry?: () => void;
  alternative?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}> = ({ title, message, retry, alternative, className = '' }) => {
  return (
    <div className={`card text-center ${className}`}>
      <div className="w-16 h-16 bg-gradient-error rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
      <div className="flex gap-3 justify-center">
        {retry && (
          <button 
            onClick={retry}
            className="btn btn-primary"
          >
            Try Again
          </button>
        )}
        {alternative && (
          <button 
            onClick={alternative.onClick}
            className="btn btn-secondary"
          >
            {alternative.label}
          </button>
        )}
      </div>
    </div>
  );
};

// 🎯 Empty State Component
export const EmptyState: React.FC<{
  title: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
  className?: string;
}> = ({ title, message, action, icon, className = '' }) => {
  return (
    <div className={`card text-center ${className}`}>
      <div className="w-16 h-16 bg-gradient-neutral rounded-full flex items-center justify-center mx-auto mb-4">
        {icon || (
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
      {action && (
        <button 
          onClick={action.onClick}
          className="btn btn-primary"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

// 🎨 Loading Overlay
export const LoadingOverlay: React.FC<{
  isVisible: boolean;
  context: string;
  className?: string;
}> = ({ isVisible, context, className = '' }) => {
  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
        <LoadingSpinner context="general" size="lg" />
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">{context}</p>
      </div>
    </div>
  );
};

// 🎭 Loading States Container
export const LoadingStatesContainer: React.FC<{
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  loadingContext: string;
  errorTitle: string;
  errorMessage: string;
  emptyTitle: string;
  emptyMessage: string;
  onRetry?: () => void;
  onAlternative?: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ 
  isLoading, 
  isError, 
  isEmpty, 
  loadingContext, 
  errorTitle, 
  errorMessage, 
  emptyTitle, 
  emptyMessage, 
  onRetry, 
  onAlternative, 
  children, 
  className = '' 
}) => {
  if (isLoading) {
    return (
      <div className={className}>
        <LoadingSpinner context="general" />
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">{loadingContext}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title={errorTitle}
        message={errorMessage}
        retry={onRetry}
        alternative={onAlternative ? { label: "Try Alternative", onClick: onAlternative } : undefined}
        className={className}
      />
    );
  }

  if (isEmpty) {
    return (
      <EmptyState
        title={emptyTitle}
        message={emptyMessage}
        className={className}
      />
    );
  }

  return <>{children}</>;
};

export default {
  SkeletonLoader,
  FarmCardSkeleton,
  LoadingSpinner,
  ProgressBar,
  SuccessState,
  ErrorState,
  EmptyState,
  LoadingOverlay,
  LoadingStatesContainer
};
