class ShotsController < ApplicationController
  def index
    @page = params[:page]
    @shots = Dribbble::Shot.popular(:page => @page, :per_page => 10)

    if request.xhr?
      render :layout => false
    end
  end
end
